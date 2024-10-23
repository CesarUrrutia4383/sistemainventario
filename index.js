const express = require('express');
const app = express();
require('./config/db');
const productoRoutes = require('./routes/producto');

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para procesar datos JSON
app.use(express.json());  // <--- Este middleware es crucial para procesar datos JSON

// Usar las rutas de productos
app.use('/', productoRoutes);

// Iniciar el servidor
app.listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
});
