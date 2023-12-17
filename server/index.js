const express = require('express');
require('dotenv').config();
const {connectToDb} = require('./src/database/db');
const sectorRoutes = require('./src/routes/sectorRoutes');
const cors = require('cors');

//initializing express 
const app = express();

//creating listening port
const port = 8080;

//root file middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const corsConfig = {
  origin: ["https://test-task-frontend-six.vercel.app"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT']
}
app.use(cors(corsConfig))
//app.options("", cors(corsConfig))

//route middleware
app.use('/api/v1', sectorRoutes);


//testing route
app.get('/', (req, res) => {
  res.send("working")
});


//database connection and app listining function using an IIFE
(async function(){
    try{
      const connected =  await connectToDb();
          app.listen(port, () => console.log(`server listening for request on: ${port}`));
    }
    catch(err){
        console.log(err.message)
    }
})();
