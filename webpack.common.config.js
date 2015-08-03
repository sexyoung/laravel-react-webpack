const path = require("path");

module.exports = {
	context: __dirname,
	entry: ["./resources/assets/javascripts/index"],
	resolve: {
		root: [path.join(__dirname, 'scripts'),
		       path.join(__dirname, 'assets/javascripts'),
		       path.join(__dirname, 'assets/stylesheets')],
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js']
	},
	module: {
		loaders: []
	}
};
