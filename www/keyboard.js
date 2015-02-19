
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var Keyboard = function() {
};

Keyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "Keyboard", "hideKeyboardAccessoryBar", [hide]);
};

Keyboard.close = function() {	
    exec(null, null, "Keyboard", "close", []);
};

Keyboard.show = function() {
    exec(null, null, "Keyboard", "show", []);
};

Keyboard.disableScroll = function(disable) {
    exec(null, null, "Keyboard", "disableScroll", [disable]);
};

/*
Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
};
*/

// https://github.com/46cl/cordova-android-focus-plugin/blob/master/www/focus.js
Keyboard.focus = function(element) {
    element = element.length ? element[0] : element;
    var elemRect = element.getBoundingClientRect(),
        bodyRect = document.body.getBoundingClientRect(),
        rect = {
          top: elemRect.top - bodyRect.top,
          left: elemRect.left - bodyRect.left,
          right: elemRect.right - bodyRect.left,
          bottom: elemRect.bottom - bodyRect.top
        };
    exec(null, null, "Keyboard", "focus", [rect]);
};

Keyboard.isVisible = false;

module.exports = Keyboard;
