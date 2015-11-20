angular.module("myApp")
        .controller('accountController', ['UserService', 'AccountService', function ( UserService, AccountService) {
                var self = this;
                self.user = UserService.getUser();
                self.accountService = AccountService;
            }]);