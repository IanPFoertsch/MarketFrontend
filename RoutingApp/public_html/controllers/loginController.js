angular.module("myApp")
        .controller('loginController', ['$window','UserService', '$http', function (window, UserService, $http) {
                var self = this;
                self.userIdentifier = UserService.getUser().userIdentifier;
                self.password = UserService.getUser().password;
                console.log("entered the login controller");
                self.login = function () {
                    //execute a post request to the server;
                    user = {userIdentifier: 'Ian', password: 'password'};
                    var jsonString = JSON.stringify(user);
                    console.log("get request executing");
                    $http({
                        method: 'POST',
                        url: 'http://localhost:8080/MarketServiceGradle/account/login',
                        data: jsonString,
                        headers: {'Content-Type': 'application/json'}
                    }).
                            then(function (response) {
                                UserService.setUser(user);

                                $http({
                                    method: 'GET',
                                    url: 'http://localhost:8080/MarketServiceGradle/position/user',
                                    headers: {'Content-Type': 'application/json'},
                                    params: {userIdentifier: UserService.getUser().userIdentifier,
                                        password: UserService.getUser().password}

                                }).then(function (response) {
                                    UserService.setPositions(response.data.positions);
                                    window.location.href = "#/account";
                                },
                                        function (response) {
                                            console.log("failure");
                                        });

                            }, (function (response) {
                                alert("failure: Unrecognized sign in.");
                            }));
                };
                self.getUser = function () {
                    return self.userIdentifier;
                };
                self.getPassword = function () {
                    return self.password;
                };
            }]);