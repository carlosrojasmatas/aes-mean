(function() {
  var app = angular.module('aesBackoffice', ['post-directives']);

  app.controller('PostsController', ['postService','$http','$scope',function(postService,$http,$scope){
    this.currPost;
    this.posts = postService.posts;
    this.types = ["Noticia","Evento","Institucional"]
    

   this.currentPost=function(post){
      this.currPost = post;
    }

    this.addPost=function(){
      var ps = this.posts;
      var cp = this.currPost;
      $http.post("/posts/saveOrUpdate",this.currPost)
      .success(function(post){
        
        if(!cp.id){
          ps.push(post);  
        }
        
      })
      .error(function(error){
        $scope.error = error;
      });

    }

    this.clear = function(){
      this.currPost = {};
    }

    this.deletePost = function(post,index){
      var ps  = this.posts;
      var self = this;
      $http.post("/posts/delete",post)
            .success(function(post){
              ps.splice(index,1);
              self.clear();
            })
    }

  }]);


  app.factory('postService',['$http',function($http){
    var instance = {
      posts: []
    }

    instance.getAll = function(){
      return $http.get('/posts/list')
            .success(function(posts){
              angular.copy(posts,instance.posts);
            });
    };

    instance.getAll();

    return instance;

  }]);

})();