const express = require('express');
const app = express();
const path = require('path');
const controller = require('../controllers/PersonagemController')

app.use(express.static(path.join(__dirname , '..' , '/public')));

app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({ extended: false}));    

//

const fetch = require("node-fetch");


//



app.get('/',controller.get)




module.exports = app;