var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'src');

module.exports = {
    entry: {
        app: path.join(entryPath, 'app.js')
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}