const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    nombre_producto: {type: String,required: true},
    descripcion: {type: String,required: true},
    precio_unitario: {type: String,required: true},
    id_categoria: {type: Int32Array,required: true},
    id_proveedor: {type: Int32Array,required: true},
})

module.exports= mongoose.model('Inventario',inventarioSchema);