import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'))
});

app.listen(3001, ()=>console.log("running local 3001"))
