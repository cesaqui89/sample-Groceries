var applicationModule = require("application");
applicationModule.start({ moduleName: "views/login/login" });

applicationModule.onSuspend = function () {
console.log("Application suspended.");
};

applicationModule.onResume = function () {
console.log("Application resumed.");
};

applicationModule.onExit = function () {
console.log("Application will exit.");

};

applicationModule.onLowMemory = function () {
console.log("Memory is low.");
};

applicationModule.onUncaughtError = function (error) {
console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
};