(function() {
  var app = angular.module('aesBackoffice', ['post-directives','menu-directives','dojo-directives']);

  app.controller('MainController',['$scope',function($scope){
    this.page = {};
    this.showPosts = function() {
      this.page = "posts";
    }

    this.showDojos = function(){
      this.page = "dojos";
    }
  }]);

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

  app.controller('DojosController',['$http',function($http){
    this.currDojo;
    this.dojos;
    this.provinces;

    this.currentDojo=function(dojo){
      this.currDojo = dojo;
    }

    this.clear = function(){
      this.currDojo = {};
    }

    this.addDojo=function(){
      var ds = this.dojos;
      var cd = this.currDojo;
      $http.post("/dojos/saveOrUpdate",cd)
      .success(function(dojo){
        
        if(!cd.id){
          ds.push(dojo);  
        }
        
      })
      .error(function(error){
        $scope.error = error;
      });

    }

    this.deleteDojo = function(dojo,index){
      var ds  = this.dojos;
      var self = this;
      $http.post("/dojos/delete",dojo)
            .success(function(dojo){
              ds.splice(index,1);
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