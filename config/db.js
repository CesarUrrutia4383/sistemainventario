const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/sisinv';

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('CONECTADO A MONGODB');
})
.catch((error)=>{
    console.error('ERROR CONECTANDO A MONGODB: ',error);
});