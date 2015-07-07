(function(){
    angular.module('menu-directives', [])
    .directive("mainMenu",function(){
        return{
            restrict:'E',
            templateUrl:'/home/menu',
            controller:function(){

                this.tab = 1;

                this.isSet=function(tabNr){
                    return this.tab == tabNr;
                };

                this.setTab=function(activeTab){
                    this.tab = activeTab;
                };
            },
            controllerAs:'tab'
    	}
    });
 })();