const path = require('path');
const base = path.join(__dirname);

const src = path.join(base, 'src');
const client = path.join(src, 'client');

module.exports = {
	base,
	src: path.join(base, 'src'),
	client,
	server: path.join(src, 'server'),
	nodeModules: path.join(base, 'node_modules'),
	customModules: path.join(base, 'custom_modules'),
	dist: path.join(base, 'dist'),
	images: path.join(client, 'images')
};
