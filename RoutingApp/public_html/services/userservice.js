angular.module('myApp')
        .service('UserService', ['AccountService', 'RestService', '$http', function(AccountService, RestService, $http){

    var self = this;
    
    self.user = {userIdentifier: 'Ian', password: 'password'};
    self.getUser = function () {
        return self.user;
    };
    self.setUser = function (newUserObject) {
        self.user.userIdentifier = newUserObject.userIdentifier;
        self.user.password = newUserObject.password;
    };
    
    self.login = function(){
       // console.log("executed");
        RestService.login(self.user)
                .then(function(promise){
                    //execute the getPositions and update the 
                    RestService.fetchPositions(self.user).then(function(positionsPromise){
                        console.log(positionsPromise);
                        AccountService.positions = positionsPromise;
                        window.location.href = "#/account";
                    }, function(){
                        
                    });
                
                    //account service accordingly.
                    //then redirect to the account page.
                    
                }, function(){
                    //otherwise, we must throw an alert 
                    //informing the user.
                    console.log("failure...beeatch");
                });
        
        
    };
}]);



