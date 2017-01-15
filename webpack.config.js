var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '.');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
    context: APP_DIR,
    devtool: debug ? "inline-sourcemap" : null,
    entry: APP_DIR + '/hello-world.jsx',
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'react-hmre'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false }),
    ]
};

module.exports = config;
