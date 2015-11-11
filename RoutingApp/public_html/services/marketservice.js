function MarketService($http){
    var self = this;
    self.marketStatus = [];
    
    
    self.addData = function(reports){
        self.marketStatus.push(reports);
    };
    
    self.getMostRecentStatus = function(){
        //get the last item in the list of status
        console.log("Getting the most recent status");
        var index = self.marketStatus.length;
        if(index === 1){
            index = 0;
        }
        return self.marketStatus[index];
    };
 
}
angular.module("myApp")
        .service("MarketService", [MarketService]);

