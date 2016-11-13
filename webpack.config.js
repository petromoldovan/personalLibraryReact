var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './app/main.js',

    output:  {
        path:'./app',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'app/index.tpl.html',
        })
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
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
