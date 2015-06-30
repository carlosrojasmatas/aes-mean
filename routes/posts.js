var model = require("../model/Post")
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/posts', function(req, res, next) {
  res.render('index.ejs', { title: 'New Post' });
  // model.Posts.forge()
  // .fetch()
  // .then(function(collection){
  // 	res.json({error:false,data:collection.toJSON()});
  // })
  // .catch(function(error){
  // 	return next(error);
  // }); 	
});

router.get('/postForm', function(req, res, next) {
  res.render('newpost.ejs', { title: 'New Post' });
  // model.Posts.forge()
  // .fetch()
  // .then(function(collection){
  // 	res.json({error:false,data:collection.toJSON()});
  // })
  // .catch(function(error){
  // 	return next(error);
  // }); 	
});

router.post('/posts/delete',function(req,res,next){
  console.log(req.body);
  model.Post.forge({id:req.body.id})
      .fetch()
      .then(function(post){
        post.destroy({require:true})
        .then(function(){
          res.json(post);  
        })
        .catch(function(error){
          return next(error);
        });
      });
      
});

router.get('/posts/list', function(req, res, next) {
  model.Posts.forge()
  .fetch()
  .then(function(posts){
   res.json(posts);
  })
  .catch(function(error){
    return next(error);
  });  
});

router.post("/posts/saveOrUpdate",function(req,res,next){

  model.Post.forge({id:req.body.id})
      .save(req.body)
      .then(function(post){
        res.json(post);
      })
/*	model.Post.forge({
		type: req.body.type,
		title: req.body.title,
		body: req.body.body,
		image: req.body.image,
		thumb: req.body.thumb,
		startDate: req.body.startDate,
		endDate: req.body.endDate
	}).save().then(function(post){
		res.json(post);
	}).catch(function(error){
		next(error);
	});*/
});

module.exports = router;
