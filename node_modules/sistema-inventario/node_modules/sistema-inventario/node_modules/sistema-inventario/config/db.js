const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://dbadmin:admin@cluster0.uukdi.mongodb.net/sisinv';

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('CONECTADO A MONGODB');
})
.catch((error)=>{
    console.error('ERROR CONECTANDO A MONGODB: ',error);
});