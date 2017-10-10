var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/js"),
        publicPath: "/js/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
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
