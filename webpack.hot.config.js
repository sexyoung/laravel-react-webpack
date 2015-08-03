const path = require("path");
const config = require("./webpack.common.config");
const webpack = require("webpack");


// We're using the bootstrap-sass loader.
// See: https://github.com/justin808/bootstrap-sass-loader
config.entry.push("webpack-dev-server/client?http://localhost:4000",
  "webpack/hot/dev-server"
  // "./scripts/webpack_only"

  // custom bootstrap
  // "bootstrap-sass!./bootstrap-sass.config.js"
  );
config.output = {

  // this file is served directly by webpack
  filename: "express-bundle.js",
  path: __dirname
};
config.plugins = [new webpack.HotModuleReplacementPlugin()];
config.devtool = "eval-source-map";

// All the styling loaders only apply to hot-reload, not rails
config.module.loaders.push(
  {test: /\.jsx?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/},
  {test: /\.css$/, loader: "style-loader!css-loader"},
  {
    test: /\.scss$/,
    loader: "style!css!sass?outputStyle=expanded&imagePath=/assets/images&includePaths[]=" +
    path.resolve(__dirname, "./assets/stylesheets")
  },

  // The url-loader uses DataUrls. The file-loader emits files.
  {test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
  {test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
  {test: /\.ttf$/, loader: "file-loader"},
  {test: /\.eot$/, loader: "file-loader"},
  {test: /\.svg$/, loader: "file-loader"});

module.exports = config;
