const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appName=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () =>{
    mongoose.connect(mongoURI,).then(()=>console.log('succesfully connected to mongo')).catch((err)=>{console.error(err);});
}

module.exports = connectToMongo;