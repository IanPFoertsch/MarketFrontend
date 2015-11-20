angular.module("myApp")
        .controller('loginController', ['UserService', function (UserService) {
                var self = this;
                self.userService = UserService;
            }]);