var path = require('path');
var webpack = require('webpack');


var config = {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname,'/app/main.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
}

module.exports = config;
