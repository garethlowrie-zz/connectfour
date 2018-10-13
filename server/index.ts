import * as Hapi from 'hapi';
import mongoose from 'mongoose';
import keys from '../server/config/keys';
import User, { IPlayer } from '../server/models/Player';
import Player from '../server/models/Player';

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
			method: 'POST',
			path: '/api/v1/players',
			handler: async(request, reply) => {
				const { name }: IPlayer = request.payload as any;
				let player;

				await User.find({ name: name }, null, null, async (err, docs) => {
					if (docs.length > 0) {
						reply.response(docs[0]).code(201);
						player = docs[0];
					}
					else {
						const newPlayer = new Player({
							name,
							score: 1
						});
						
						await newPlayer.save((err, doc) => {
							if (doc) {
								reply.response(newPlayer).code(201);
								player = doc;
							}
						});
					}
				}).exec();

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
