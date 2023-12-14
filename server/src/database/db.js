const mongoose = require('mongoose');
require('dotenv').config();

//creating a mongodb connection for the entire pplication.
async function connectToDb(){
    try{
       const connectDb = await mongoose.connect(process.env.MONGODB_URL);
       console.log('connected to mongodb database successfully');
    }
    catch(err){
        console.log(err.message);
    }
};

module.exports = {connectToDb};