const hapi = require('hapi');

// Create a new instance of the Hapi server
const server = hapi.server({
	port: 5000,
	host: 'localhost'
});

const init = async () => {
	await server.start();
	console.log(`Server up and running @ ${server.info.uri}`)
}

init();
