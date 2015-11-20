angular.module("myApp")
        .controller('marketController', [ 'MarketService', function( MarketService) {
                var self = this;
        
                //Note the avoidance of replicating data fields here. 
                //The only thing we bind is the injected MarketService
                //to the self.service field.
                self.service = MarketService;
                //In the html when MarketController is references (as marketCtrl
                //we access service fields and methods via
                //marketCtrl.service.field and 
                //marketCtrl.service.someMethod();
            }]);