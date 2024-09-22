const express = require('express');
const router = express.Router();
const producto = require('../models/producto');


router.get('/productos',async(req,res)=>{
    try{
        const productos= await producto.find();
        res.render('producto', { productos }); 
    }catch(error){
        res.status(500).json({error:'Error del Servidor'});
    }
});
module.exports =router;