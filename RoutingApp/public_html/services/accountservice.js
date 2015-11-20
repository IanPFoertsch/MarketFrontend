angular.module("myApp")
        .service("AccountService", ['$http', function ($http) {
                var self = this;
                self.positions = [];

                self.setPositions = function (saveThese) {
                    self.positions = saveThese;

                };
                self.getPositions = function () {
                    return self.positions;
                };

                self.update = function () {

                };


            }]);


