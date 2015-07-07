(function(){
    angular.module('post-directives', [])

    .directive("postsGrid",function(){
    	return{
    		restrict:'E',
    		templateUrl:'/posts'
    	}
    });
 })();