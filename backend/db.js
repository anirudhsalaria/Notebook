const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appName=MongoDB%20Compass&directConnection=true&ssl=false";



module.exports = connectToMongo;