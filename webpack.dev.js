var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.js');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['webpack-dev-server/client?http://127.0.0.1:3000', 'webpack/hot/only-dev-server'].concat(baseWebpackConfig.entry[name]);
})

baseWebpackConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
);

module.exports = merge(baseWebpackConfig, {
    devtool: '#inline-source-map',
    output: {
        path: path.join(__dirname),
        filename: '[name].js',
    }
})