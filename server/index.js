import express from 'express';
import path from 'path';
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:1234@ds233500.mlab.com:33500/leave-man');
var db = mongoose.connection;

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

var users = require('./routes/users');
var auth = require('./routes/auth');
var leave = require('./routes/leave');

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}))
app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.json());

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/leave', leave);

app.listen(3000,() => console.log("Server is running at port 3000"))