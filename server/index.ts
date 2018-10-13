import * as Hapi from 'hapi';
import mongoose from 'mongoose';
import keys from '../server/config/keys';
import User, { IPlayer } from '../server/models/Player';
import Player from '../server/models/Player';
import { graphqlHapi, graphiqlHapi} from 'graphql-server-hapi';
import schema from '../server/graphql/schema';

mongoose.connect(keys.connectionUri);

mongoose.connection.once('open', () => {
	console.log('Connected to MONGO')
});

mongoose.set('useFindAndModify', false);

// Create a new instance of the Hapi server
const server = new Hapi.Server({
	port: 5000,
	host: 'localhost'
});


const init = async () => {
	

	await server.register({
		plugin: graphqlHapi,
		options: {
			path: '/graphql',
			graphQlOptions: {
				schema
			},
			route: {
				cors: true
			}
		}
	});

	await server.register({
		plugin: graphiqlHapi,
		options: {
			path: '/graphiql',
			graphiqlOptions: {
				endpointURL:  '/graphql'
			},
			route: {
				cors: true
			}
		}
	});

	server.route([
		{
			method: 'GET',
			path: '/',
			handler: (request, reply) => {
				return `<h1>My modern api</h1>`;
			}
		},
		{
			method: 'GET',
			path: '/api/v1/players',
			handler: (request, reply) => {
				return User.find();
			}
		},
		{
			method: 'GET',
			path: '/api/v1/players/top',
			handler: (request, reply) => {
				const DEFAULT_LIMIT = 10;
				const { quantity } = request.query as any;
				const quantityAsNumber = Number(quantity);
				const limit = isNaN(quantityAsNumber) ? DEFAULT_LIMIT : quantityAsNumber;
				return User.find().sort({ score: -1}).limit(limit).exec();
			}
		},
		{
			method: 'POST',
			path: '/api/v1/players',
			handler: async(request, reply) => {
				const { name }: IPlayer = request.payload as any;
				let player: any;

				const result = await User.find({ name: name }).exec();

				if(result.length > 0) {
					player = result[0];
				}
				else {
					const newPlayer = new Player({
						name,
						score: 1
					});
					
					const createResult = await newPlayer.save();
					player = createResult;
				}
				
				return player;
			}
		},
		{
			method: 'POST',
			path: '/api/v1/players/increment',
			handler: (request, reply) => {
				const { _id } = request.payload as any;
				return User.findByIdAndUpdate(
					_id,
					{ $inc: { score: 1 } },
					{ new: true }
				);
			}
		}
	]);
	await server.start();
	console.log(`Server up and running @ ${server.info.uri}`)
}

init();
