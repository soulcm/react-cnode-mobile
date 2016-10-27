var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'src');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: path.join(entryPath, 'app.js')
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(less|css)?$/,
            loader: ExtractTextPlugin.extract(['css', 'less'])
        }, {
            test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
        }, {
            test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
            loader: "file-loader"
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}