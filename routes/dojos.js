var model = require("../model/Dojo")
var express = require('express');
var router = express.Router();

/* GET users listing. */


router.post('/dojos/delete',function(req,res,next){
  model.Dojo.forge({id:req.body.id})
      .fetch()
      .then(function(dojo){
        dojo.destroy({require:true})
        .then(function(){
          res.json(dojo);  
        })
        .catch(function(error){
          return next(error);
        });
      });
      
});

router.get('/dojos', function(req, res, next) {
  model.Dojos.forge()
  .fetch()
  .then(function(dojos){
   res.json(dojos);
  })
  .catch(function(error){
    return next(error);
  });  
});

router.post("/dojos/saveOrUpdate",function(req,res,next){

  model.Dojo.forge({id:req.body.id})
      .save(req.body)
      .then(function(dojo){
        res.json(dojo);
      })
});

module.exports = router;
