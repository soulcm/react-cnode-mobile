var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.js');
var port = 3000;

//启动服务
var server = new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname),
    hot: true,
    noInfo: true,
    stats: {
        colors: true,
        // chunks: false
    },
    publicPath: 'http://127.0.0.1:3000/'
});

server.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening at http://127.0.0.1:' + port);
    }
})