(function(){
    angular.module('post-directives', [])

    .directive("editPost",function(){
    	return{
    		retrict:'E',
    		templateUrl:'/postForm'
    	}
    })
    .directive("postsPage",function(){
    	return{
            restrict:"E",
    		templateUrl:"/posts"

    	}
    });


 })();