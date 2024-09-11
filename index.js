const express = require ('express');
const app= express();
require('./config/db');
const productoController = require('./controllers/productoController');

app.use('/',productoController);

app.listen('3000',function(){
    console.log(' 3000')
});