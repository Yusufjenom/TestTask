const express = require('express');
require('dotenv').config();
const {connectToDb} = require('./src/database/db');
const sectorRoutes = require('./src/routes/sectorRoutes');
const cors = require('cors');

//initializing express 
const app = express();

//creating listening port
const port = process.env.PORT || 8080;

//root file middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  }));

//route middleware
app.use('/api/v1', sectorRoutes);

//database connection and app listining function using an IIFE
(async function(){
    try{
      const connected =  await connectToDb();
          app.listen(port, () => console.log(`server listening for request on: ${process.env.PORT}`));
    }
    catch(err){
        console.log(err.message)
    }
})();
