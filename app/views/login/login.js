//modelo
var UserViewModel = require("../../shared/view-models/user-view-model");
//var user = new UserViewModel();

//descomentar
var user = new UserViewModel({
    email: "user@nativescript.org",
    password: "password"
});

//modulos
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var dialogsModule = require("ui/dialogs");


//funcion para cuando cargó la pantalla
exports.loaded = function(args) {
	var page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Desafortunadamente no podemos encontrar su cuenta.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function() {
            frameModule.topmost().navigate("views/list/list");
        });
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};