const express = require ('express');
const app= express();
require('./config/db');
const productoRoutes = require('./routes/producto');


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use('/',productoRoutes);

app.listen('3000',function(){
    console.log(' 3000')
});