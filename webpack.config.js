var webpack = require('webpack');
var bower_dir = __dirname + '/resources/assets/bower_components'

var config = {
	addVendor: function (name, path) {
		this.resolve.alias[name] = path;
		this.module.noParse.push(new RegExp(path));
	},
	entry: {
		app: [
		'webpack/hot/dev-server',,'./resources/assets/jsx/app.jsx'],
		app2: [
			'./resources/assets/jsx/app2.jsx'
		],
		vendors: ['react']
		// Home: ['./app/Home.jsx'],
		// Admin: ['./app/Admin.jsx']
	},
	// 這邊去引用 bower 裡的 react 而不用 npm 裡的 react
	resolve :{
		alias: {
		'react': bower_dir + '/react/react.min.js'
		}
	},
	output: {
		path: './public/js',
		filename: '[name].js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
	    // 這邊指定 webpack 不要處理 react 這個檔案
	    noParse: [],
		loaders: [
			{test: /\.jsx$/ , loader: 'jsx'},
			{test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			// {test: /\.(png|woff|otf)$/, loader: 'url-loader'}
			// {test: /\.css$/ , loader: 'style-loader!css-loader'}
		]
	},

	// We add a plugin called CommonsChunkPlugin that will take the vendors chunk
	// and create a vendors.js file. As you can see the first argument matches the key
	// of the entry, "vendors"
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
	],
};


config.addVendor('react', bower_dir + '/react/react.min.js');

module.exports = config;