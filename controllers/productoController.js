const express = require('express');
const router = express.Router();
const producto = require('../models/producto');

//GET: Obtener todos los productos
router.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        const productosmod = productos.map(producto => producto.toObject({ versionKey: false }));
        res.json(productos);
    } catch (error) {
        res.status(500).send('Error al obtener los productos: ' + error.message);
    }
});


// GET: Obtener un solo producto por ID
router.get('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).send('Producto no encontrado');
        res.json(producto.toObject({ versionKey: false })); // Excluir __v al convertir a objeto
    } catch (error) {
        res.status(500).send('Error al obtener el producto: ' + error.message);
    }
});


// POST: Crear un nuevo producto
router.post('/productos', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        console.log(req.body) // Asume que el cuerpo de la solicitud contiene los datos del producto
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado); // 201: Recurso creado exitosamente
    } catch (error) {
        res.status(500).send('Error al crear el producto: ' + error.message);
    }
});

// PUT: Actualizar un producto por ID
router.put('/productos/:id', async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) return res.status(404).send('Producto no encontrado');
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).send('Error al actualizar el producto: ' + error.message);
    }
});

// DELETE: Eliminar un producto por ID
router.delete('/productos/:id', async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) return res.status(404).send('Producto no encontrado');
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).send('Error al eliminar el producto: ' + error.message);
    }
});


module.exports =router;