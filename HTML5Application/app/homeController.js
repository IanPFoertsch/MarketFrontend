angular.module("notesApp")
        .controller('homeController', ['UserService', '$http', function (UserService, $http) {
                var self = this;
                //homeController must display username, 
                //current positions in a table. 
                //Therefor, recover userobject from userService
                //and recover the positions as well
                self.user = UserService.getUser();
                self.positions = UserService.getPositions();
        }]);
