const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js"
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.html$/,
			use: {
				loader: "html-loader"
			}
		}]
	},
	plugins: [
			new HtmlWebPackPlugin({
				template: "./views/index.html",
				filename: "index.html"
			})
	]
};
