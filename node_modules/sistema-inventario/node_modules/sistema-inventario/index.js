const express = require('express');
const app = express();
require('./config/db');

// Variable en memoria para el estado de autenticación
app.locals.isAuthenticated = false;
app.locals.usuarioId = null;  // Agregar un campo para almacenar el ID del usuario autenticado

// Interpretar formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    if (req.query._method) {
        req.method = req.query._method.toUpperCase();
        delete req.query._method;
    }
    next();
});
app.use(express.json());

// Establecer EJS como el motor de plantillas
app.set('view engine', 'ejs');

// Middleware para verificar autenticación
function verificarAutenticacion(req, res, next) {
    if (!req.app.locals.isAuthenticated) {
        return res.redirect('/auth/login'); // Redirige al login si no está autenticado
    }
    next(); // Permite el acceso si está autenticado
}

// Rutas de autenticación
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Redirigir la ruta raíz a la página de login
app.get('/', (req, res) => {
    res.redirect('/auth/login');
});

// Rutas de productos (requieren autenticación)
const productoRoutes = require('./routes/producto');
app.use('/productos', verificarAutenticacion, productoRoutes);

// Configurar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
