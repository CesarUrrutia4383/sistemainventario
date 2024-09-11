const express = require ('express');
const app= express();
require('./config/db');
const productoController = require('./controllers/productoController');

app.use('/',libroController);

app.listen('3000',function(){
    console.log(' 3000')
});