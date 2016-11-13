import path from 'path';


export default {
    devtools: 'eval-source-map',
    entry: path.join(__dirname,'/app/main.js'),

    output:  {
        path:'/app'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
}
