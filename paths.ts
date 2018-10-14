const path = require('path');
const base = path.join(__dirname);
const src = path.join(base, 'src');

module.exports = {
	base,
	src,
	server: path.join(base, 'server'),
	nodeModules: path.join(base, 'node_modules'),
	dist: path.join(base, 'dist'),
	images: path.join(base, 'images')
};
