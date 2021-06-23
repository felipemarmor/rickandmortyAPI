const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false}));
app.engine('html', require('ejs').renderFile);



const RickAndMortyRoute = require('./RickAndMorty');

app.use('/', RickAndMortyRoute);






module.exports = app;