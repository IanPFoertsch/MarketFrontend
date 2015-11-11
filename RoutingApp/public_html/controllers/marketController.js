angular.module("myApp")
        .controller('marketController', ['MarketService', function (MarketService) {
                var self = this;
                self.mostRecentReport = MarketService.
                self.positions = UserService.getPositions();
            }]);