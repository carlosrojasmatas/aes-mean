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
      $http.post("/posts/saveOrUpdate",this.currPost)
      .success(function(post){
        console.log(post);
      })
      .error(function(error){
        $scope.error = error;
      });

    }

    this.clear = function(){
      this.currPost = {};
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