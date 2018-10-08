const autoPrefixer = require('autoprefixer');

module.exports = function() {
	return {
		plugins: [autoPrefixer()]
	};
};
