import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webpackHotMiddleware from 'webpack-hot-middleware';

import users from './routes/users';
import books from './routes/books'

let app = express();

//make data in request to be available in request.body
app.use(bodyParser.json());

//define route
app.use('/api/users', users);
app.use('/api/books', books);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'))
});

app.listen(3000, ()=>console.log("running local 3001"))
