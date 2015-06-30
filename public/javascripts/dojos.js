(function(){
    angular.module('post-directives', [])

    .directive("dojosPage",function(){
    	return{
    		retrict:'E',
    		templateUrl:'/dojos'
    	}
    });

 })();