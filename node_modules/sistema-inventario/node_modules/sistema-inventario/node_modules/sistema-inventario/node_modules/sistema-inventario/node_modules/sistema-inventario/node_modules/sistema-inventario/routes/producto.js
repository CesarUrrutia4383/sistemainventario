const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Middleware para verificar sesión
const verificarSesion = (req, res, next) => {
    if (!req.app.locals.isAuthenticated) {
        return res.redirect('/auth/login');  // Redirige si no está autenticado
    }
    next();
};

// GET: Obtener todos los productos (protegido)
router.get('/', verificarSesion, async (req, res) => {
    try {
        const productos = await Producto.find();
        res.render('producto', { productos });
    } catch (error) {
        res.status(500).send('Error al obtener los productos: ' + error.message);
    }
});

// GET: Obtener un solo producto por ID
router.get('/:id', verificarSesion, async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).send('Producto no encontrado');
        res.render('indv', { producto });
    } catch (error) {
        res.status(500).send('Error al obtener el producto: ' + error.message);
    }
});

// POST: Crear un nuevo producto
router.post('/', verificarSesion, async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.redirect('/productos');
    } catch (error) {
        res.status(500).send('Error al crear el producto: ' + error.message);
    }
});

// PUT: Actualizar un producto
router.put('/:id', verificarSesion, async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) return res.status(404).send('Producto no encontrado');
        res.redirect('/productos');
    } catch (error) {
        res.status(500).send('Error al actualizar el producto: ' + error.message);
    }
});

// DELETE: Eliminar un producto
router.delete('/:id', verificarSesion, async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) return res.status(404).send('Producto no encontrado');
        res.redirect('/productos');
    } catch (error) {
        res.status(500).send('Error al eliminar el producto: ' + error.message);
    }
});

module.exports = router;
