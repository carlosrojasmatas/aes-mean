var model = require("../model/Post")
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/posts', function(req, res, next) {
  
  model.Posts.forge()
  .fetch()
  .then(function(collection){
  	res.json({error:false,data:collection.toJSON()});
  })
  .catch(function(error){
  	return next(error);
  }); 		
});


module.exports = router;
