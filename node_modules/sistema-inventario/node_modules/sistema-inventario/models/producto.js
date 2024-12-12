const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    _id: {type: Number,required: true},
    nombre_producto: {type: String,required: true},
    descripcion: {type: String,required: true},
    precio_unitario: {type: String,required: true},
    id_categoria: {type: Number,required: true},
    id_proveedor: {type: Number,required: true},
}, { versionKey: false }); // <--- Esto desactiva el campo __v dentro de la base de datos de mongoDB

module.exports= mongoose.model('Productos',productoSchema);