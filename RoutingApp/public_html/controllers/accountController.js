angular.module("myApp")
        .controller('accountController', ['UserService', function ( UserService) {
                var self = this;
                self.user = UserService.getUser();
                self.positions = UserService.getPositions();
            }]);