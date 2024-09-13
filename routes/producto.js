const express = require('express');
const router = express.Router();
const Producto = require('../models/Productos');

// Ruta para mostrar los productos
router.get('/producto', async (req, res) => {
    try {
        const productos = await Producto.find(); // Buscar todos los productos en la BD
        res.render('productos', { productos }); // Renderizar la vista 'productos.ejs'
    } catch (error) {
        res.status(500).send('Error al obtener los productos: ' + error.message);
    }
});

module.exports = router;
