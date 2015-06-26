(function() {
  var app = angular.module('aesBackoffice', ['post-directives']);

  app.controller('PostsController', function(){
    this.currPost;

    this.posts = [
     { "id":1,
       "title":"title 1",
       "type":"news",
       "body":"body 1",
       "image":"image.jpg",
       "thumb":"thumb.jpg",
    },
     { "id":2,
       "title":"title 2",
       "type":"news",
       "body":"body 2",
       "image":"image.jpg",
       "thumb":"thumb.jpg",
    },
     { "id":3,
       "title":"title 3",
       "type":"news",
       "body":"body 3",
       "image":"image.jpg",
       "thumb":"thumb.jpg",
    }];

    this.currentPost=function(post){
      this.currPost = post;
    }

    this.addPost=function(post){
      window.alert("added");
    }

    this.clear = function(){
      this.currPost = {};
    }

  });

})();