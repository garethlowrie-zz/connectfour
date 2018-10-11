const path = require('path');
const base = path.join(__dirname);

module.exports = {
	base,
	src: path.join(base, 'src'),
	//server: path.join(base, 'server'),
	nodeModules: path.join(base, 'node_modules'),
	customModules: path.join(base, 'custom_modules'),
	dist: path.join(base, 'dist'),
	images: path.join(base, 'images')
};
