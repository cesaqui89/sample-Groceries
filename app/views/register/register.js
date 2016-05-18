var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");


var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = user;
};

function completeRegistration() {
    user.register()
        .then(function() {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function() {
                    frameModule.topmost().navigate("views/login/login");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Desafortunadamente no podemos crear su cuenta.",
                    okButtonText: "OK"
                });
        });
}

exports.register = function() {
    if (user.isValidEmail()) {
        completeRegistration();
    } else {
        dialogsModule.alert({
            message: "Ingrese una dirección de correo válida.",
            okButtonText: "OK"
        });
    }
};