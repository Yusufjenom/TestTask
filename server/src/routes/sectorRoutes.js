const router = require('express').Router();
const {createASectorPost,
       getAPost,
       getPosts,
       upDateAPost
      } = require('../controllers/sectorController');
const {setCache} = require('../middlewares/cache');


//creating routes for every controller


//post route to create a post
router.post('/create-post', createASectorPost);

//get a single post by id from the route parameter
router.get('/post/:id', setCache, getAPost);

//get all posts
router.get('/posts', setCache, getPosts);

//update a post by id
router.put('/update-post/:id', upDateAPost);




module.exports = router;