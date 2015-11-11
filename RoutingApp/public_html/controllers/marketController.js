angular.module("myApp")
        .controller('marketController', ['$http', 'MarketService', function($http, MarketService) {
                var self = this;
                self.status = [];
                self.mostRecentStatus = [];
                
                
              
                    
                
                self.update = function () {
                    $http({
                        method: 'GET',
                        url: 'http://localhost:8080/MarketServiceGradle/marketReport'
                    }).
                            then(function (response) {
                                var mostRecent = response.data.reports;
                                self.status.push(mostRecent);
                                self.mostRecentStatus = mostRecent;
                            }, (function (response) {
                                alert("Attempt to connect to Market Report Service Failed.");
                            }));
                };
                
                
            }]);