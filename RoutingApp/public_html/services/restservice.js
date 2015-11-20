angular.module("myApp")
        .service("RestService", ['$http', function ($http) {
                var self = this;
                self.login = function(user){
                    var jsonString = JSON.stringify(user);
                    var promise = $http({
                        method: 'POST',
                        url: 'http://localhost:8080/MarketServiceGradle/account/login',
                        data: jsonString,
                        headers: {'Content-Type': 'application/json'}
                    }).
                            then(function (response) {
                                return true;
                            }, (function (response) {
                                //console.log("called!");
                                alert("failure: Unrecognized sign in.");
                                return false;
                            }));
                    return promise;
                };
                
                self.fetchPositions = function(user){
                    var positionsPromise = $http({
                                 method: 'GET',
                                 url: 'http://localhost:8080/MarketServiceGradle/position/user',
                                 headers: {'Content-Type': 'application/json'},
                                 params: {userIdentifier:user.userIdentifier,
                                 password:user.password}
                                 
                                 }).then(function (response) {
                                    return response.data.positions;
                                 },
                                 function (response) {
                                     alert("failed to fetch positions");
                                     return {};
                                 });
                    return positionsPromise;   
                };
}]);
            

