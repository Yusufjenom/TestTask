const {
    createSector,
    getSectorById,
    getSectors,
    findASectorAndUpdate
} = require('../services/sectorServices');


//function that interact with the incoming requests and response

//creating a post
const createASectorPost = async (req, res) => {
    try{
       const {name, sector, term} = req.body;
       const savedPost = await createSector({name, sector, term});
       res.status(201).json({
        success: true,
        message: savedPost
       });
    }
    catch(err){
        console.log(err.message)
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

//getting a post by post id
const getAPost = async (req, res) => {
    try{
       const {id} = req.params;
       const post = await getSectorById(id);
       res.status(200).json({
        success: true,
        message: post
       });
    }
    catch(err){
       console.log(err.message);
       res.status(404).json({
        success: true,
        message: err.message
       });
    }
};

//getting all posts
const getPosts = async (req, res) => {
    try{
      const posts = await getSectors();
      res.status(200).json({
        success: true,
        message: posts
      })
    }
    catch(err){
       console.log(err.message);
       res.status(404).json({
        success: false,
        message: err.message
       })
    }
};

//find a post by id and update the post
const upDateAPost = async (req, res) => {
    try{
      const {id} = req.params;
      const {name, sector, term} = req.body;
      const updatedPost = await findASectorAndUpdate(id ,{
        name,
        sector, 
        term
      });
      res.status(200).json({
        success: true,
        message: updatedPost
      });
    }
    catch(err){
      console.log(err.message);
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
};


module.exports = {createASectorPost,
                  getAPost,
                  getPosts,
                  upDateAPost
                 };