var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/js"),
        publicPath: "./dist"
    },
    devServer: {
        host: "localhost",
        port: "5000",
        contentBase: "./dist"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new CopyWebpackPlugin([
            { from: "./src/index.html", to: path.resolve(__dirname, "dist/index.html") }
        ])
    ]
};
