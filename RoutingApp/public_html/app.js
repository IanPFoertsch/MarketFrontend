//Have to name the module, then specify an emtpy dependencies list

angular.module("myApp", ["ngRoute"])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'login.html',
                    controller: 'loginController',
                    controllerAs: 'loginCtrl'
                        })
                        .when('/account', {
                            templateUrl: 'account.html',
                            controller:'accountController',
                            controllerAs:'accountCtrl'
                        })
                        .when('/market', {
                            templateUrl: 'market.html',
                            controller:'marketController',
                            controllerAs:'marketCtrl'        
                        })
                                .when('/trade', {
                                templateUrl: 'trade.html',
                                controller:'tradeController',
                                controllerAs:'tradeCtrl'        
                        })
                .otherwise({redirectTo: '/'});
            }]);
