const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// POST: Iniciar sesión
router.post('/login', async (req, res) => {
    const { usuario, contrasena } = req.body;

    try {
        const user = await Usuario.findOne({ usuario, contrasena });

        if (!user) {
            return res.status(401).send('Credenciales inválidas');
        }

        // Marca al usuario como autenticado y guarda su ID
        req.app.locals.isAuthenticated = true;
        req.app.locals.usuarioId = user._id;  // Almacena el ID del usuario autenticado

        res.redirect('/productos');  // Redirige a la página de productos
    } catch (error) {
        res.status(500).send('Error al iniciar sesión: ' + error.message);
    }
});

// GET: Página de login
router.get('/login', (req, res) => {
    res.render('login');  // Renderiza la página de login
});

// POST: Cerrar sesión
router.post('/logout', (req, res) => {
    req.app.locals.isAuthenticated = false;  // Marca la sesión como no autenticada
    req.app.locals.usuarioId = null;  // Elimina el ID del usuario
    res.redirect('/auth/login');  // Redirige al login
});


module.exports = router;
