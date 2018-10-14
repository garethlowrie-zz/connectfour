import {MongoClient, ObjectId} from 'mongodb';
import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import cors from 'cors';
import prepare from "./util/prepare";
import keys from './config/keys';

const MONGO_URL = keys.connectionUri;

const app = express();
app.use(cors());

const typeDefs = [`
	type Query {
		player(name: String): Player
		topPlayers(quantity: Int): [Player]
	}

	type Player {
		_id: String
		name: String
		score: Int
	}

	type Mutation {
		createPlayer(name: String, score: Int): Player
		incrementScore(_id: String): Player
	}

	schema {
		query: Query
		mutation: Mutation
	}
`];
	
export const start = async () => {
  try {
    MongoClient.connect(MONGO_URL, (err, client) => {
		let db = client.db('emailydev');
		const Players = db.collection('players');
		const DEFAULT_QUANTITY = 5;

		const resolvers = {
			Query: {
				player: async (root: any, {name}: any) => {
					return prepare(await Players.findOne({ name }));
				},
				topPlayers: async (root: any, { quantity }: any) => {
					console.log('QUANTITY ', quantity);
					const limit = quantity || DEFAULT_QUANTITY;
					return (await Players.find({}).sort({ score: -1 }).limit(limit).toArray()).map(prepare);
				}
			},
			Mutation: {
				createPlayer: async (root: any, args: any, context: any, info: any) => {
					const DEFAULT_SCORE = 1;
					const player = {
						name: args.name,
						score: args.score || DEFAULT_SCORE
					};

					// Check if this player already exists and return this player
					const existingPlayer = await Players.findOne({ name: args.name });
					if(existingPlayer) {
						return prepare(existingPlayer);
					}

					// Create the new player and return this player
					const newPlayer = await Players.insertOne(player);
					return prepare(newPlayer.ops[0]);
			  	},
				incrementScore: async (root: any, args: any) => {
					const { _id } = args;
					const result = await Players.findOneAndUpdate(
						{ _id: new ObjectId(_id) },
						{ $inc: { score: 1 } },
						{ returnOriginal: false }
					);

					if(result) {
						return prepare(result.value);
					}
				}
			}
		};
	  
		const schema = makeExecutableSchema({
			typeDefs,
			resolvers
		});

		app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
		app.use('/graphiql', graphiqlExpress({
			endpointURL: '/graphql'
		}));
		app.listen(3001, () => {
			console.log('Visit http://localhost:3001/graphiql')
		});
	});
  } catch (e) {
    console.log(e)
  }
}

start();