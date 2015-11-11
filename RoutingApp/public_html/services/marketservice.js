function MarketService($http){
    var self = this;
    self.marketStatus = [[]];
    
    self.addMarketStatus = function(newMarketStatus){
        self.marketStatus.push(newMarketStatus);
    };
    self.getMostRecentStatus = function(){
        var indexOfLast = self.marketStatus.length - 1;
        if(indexOfLast < 1){
            indexOfLast = 0;
        }
        return self.marketStatus[0];
    };
    
    self.update = function () {
                    $http({
                        method: 'GET',
                        url: 'http://localhost:8080/MarketServiceGradle/marketReport'
                    }).
                            then(function (response) {
                                MarketService.addData(response.reports);
                            }, (function (response) {
                                alert("Attempt to connect to Market Report Service Failed.");
                            }));
                };
}
angular.module("myApp")
        .service("MarketService", [MarketService]);

