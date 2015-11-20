angular.module("myApp")
        .service("MarketService", ['$http', function($http) {
          var self = this;
    
    self.mostRecentStatus = [];
    self.symbolArray = [];
    
    self.getMostRecentStatus = function(){
        return self.mostRecentStatus;
    };
    
    self.addData = function(reports){
        self.marketStatus.push(reports);
    };
    
    self.updateSymbolArray = function(){
        //access the mostRecent status, iterate through it
        //add all symbols to a table of symbols
        //and set the self.symbolArray field to point to the new array
        var newSymbolArray = [];
        for(var report in self.mostRecentStatus){
            newSymbolArray.push(self.mostRecentStatus[report].symbol);
        }
        self.symbolArray = newSymbolArray;
    };
    
    
    
    self.update = function () {
                    $http({
                        method: 'GET',
                        url: 'http://localhost:8080/MarketServiceGradle/marketReport'
                         }).
                            then(function (response) {
                                var mostRecent = response.data.reports;
                                self.mostRecentStatus = mostRecent;
                                //update the local symbolArrayTable.
                                self.updateSymbolArray();
                            }, (function (response) {
                                alert("Attempt to connect to Market Report Service Failed.");
                            }));
    };
    
}]);

