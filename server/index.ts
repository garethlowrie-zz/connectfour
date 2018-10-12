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
			handler: (request, reply) => {
				const { name }: IPlayer = request.payload as any;

				const player = new Player({
					name,
					score: 1
				});

				return player.save();
			}
		},
		{
			method: 'POST',
			path: '/api/v1/players/increment',
			handler: (request, reply) => {
				const { name }: IPlayer = request.payload as any;
				return User.findOneAndUpdate({ name }, { $inc: { score: 1 } });
			}
		}
	]);
	await server.start();
	console.log(keys.connectionUri)
	console.log(`Server up and running @ ${server.info.uri}`)
}

init();
