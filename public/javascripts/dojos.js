(function(){
    angular.module('dojo-directives', [])

    .directive("dojosGrid",function(){
    	return{
    		restrict:'E',
    		templateUrl:'/dojos'
    	}
    });

 })();