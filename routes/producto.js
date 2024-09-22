const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Ruta para mostrar los productos
router.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find(); // Buscar todos los productos en la BD
        res.render('producto', { productos }); // Renderizar la vista 'productos.ejs'
    } catch (error) {
        res.status(500).send('Error al obtener los productos: ' + error.message);
    }
});

// Ruta para mostrar un solo producto
router.get('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).send('Producto no encontrado');
        res.render('indv', { producto });
    } catch (error) {
        res.status(500).send('Error al obtener el producto: ' + error.message);
    }
});
module.exports = router;
