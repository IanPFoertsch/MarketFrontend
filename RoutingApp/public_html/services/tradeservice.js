angular.module('myApp')
        .service('TradeService', ['$http','MarketService', 'UserService', function($http, MarketService, UserService){
                var self = this;
                self.date = new Date();
                self.marketService = MarketService;
                self.userService = UserService;
                
                self.postTypes = [
                        "BID",
                        "ASK"
                ];
                
                self.trade = {symbol:"",
                        price:0,
                        volume:0,
                        userIdentifier:"",
                        date:0,
                        postingType:""};
                self.submitTrade = function(){

                self.trade.date = self.date.getTime();
                        self.trade.userIdentifier = UserService.getUser().userIdentifier;
                        $http({
                        method:'POST',
                                url:'http://localhost:8080/MarketServiceGradle/order',
                                headers: {'Content-Type': 'application/json'},
                                data: JSON.stringify(self.trade)
                        })
                        .then(function(response){
                            alert('Order submitted');
                            self.marketService.update();
                        }, function(response){
                            alert('Server status: ' + response.status);
                        });
                };
            }]);