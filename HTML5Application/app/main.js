function UserService() {
    //remember that we have to initialize this.user as a FIELD of the userservice
    //var user initializes it as a variable
    this.positions = [];

    this.setPositions = function (saveThese) {
        this.positions = saveThese;
        //console.log(this.positions);
        //for(var pos in this.positions){
        //the var thing in otherthing doesn't 
        //give us a reference to var thing, 
        //rather we must still recover it from the 
        //otherthing using otherthing[thing];
        //  console.log(this.positions[pos]);
        //}
    };
    this.getPositions = function () {
        return this.positions;
    };

    this.user = {userIdentifier: 'h', password: 'b'};
    this.getUser = function () {
        return this.user;
    };
    this.setUser = function (newUserObject) {
        this.user.userIdentifier = newUserObject.userIdentifier;
        this.user.password = newUserObject.password;

    };
}



angular.module('notesApp')
        .service('UserService', [UserService])
        //observe the line below: .controller('loginController', ['ItemService', function(ItemService) {
        //listing 'ItemService', function(ItemService) { .. in the controller definition 
        //announces that we depend upon the item service, and that we are going to be referring to 
        //that function by the name ItemService
        .controller('MainCtrl', [function () {
            var self = this;
            self.tab = 'login';
            self.open = function(tab){
                self.tab = tab;
                //console.log(self.tab);
            };
        }]);
        