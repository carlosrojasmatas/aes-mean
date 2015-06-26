(function(){
    angular.module('post-directives', [])

    .directive("editPost",function(){
    	return{
    		retrict:'E',
    		templateUrl:'/postForm'
    	}
    })
    .directive("postList",function(){
    	return{
    		restrict:"E",
    		templateUrl:"/postList"

    	}
    });


 })();