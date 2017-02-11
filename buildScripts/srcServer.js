//var express = require('express'); // dev webserver
//var path = require('path');
//var open = require('open'); // open browser
//var port = 3000;
//var app = express();

// ES6 syntax
import express from 'express';
import path from 'path';
import open from 'open';
//webpack addition(s)
import webpack from 'webpack';
/* eslint-disable no-console */
import config from '../webpack.config.dev';

const port = 3000;
const app = express();

// webpack addition(s)
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
if (err){
  console.log(err);
  } else {
  open('http://localhost:' + port);
  }
});

