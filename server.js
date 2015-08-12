var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.hot.config");

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	noInfo: false,
	stats: {colors: true},
	proxy: {
		"/api/*": "http://127.0.0.1:8000/"
	}
});


server.listen(4444, "localhost", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at localhost:4444...");
});
