const express = require ('express');
const app= express();
require('./config/db');
const productoController = require('./controllers/productoController');


// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

// Servir archivos estáticos como CSS
app.use(express.static('public'));

app.use('/',productoController);

app.listen('3000',function(){
    console.log(' 3000')
});