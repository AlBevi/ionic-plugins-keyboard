Keyboard
======

The `Keyboard` object on the `cordova.plugins` object provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.

Methods
-------

- cordova.plugins.Keyboard.hideKeyboardAccessoryBar
- cordova.plugins.Keyboard.close
- cordova.plugins.Keyboard.disableScroll

Properties
--------

- cordova.plugins.Keyboard.isVisible

Events
--------

- native.showkeyboard
- native.hidekeyboard

Permissions
-----------

#### config.xml

            <feature name="Keyboard">
                <param name="ios-package" value="IonicKeyboard" onload="true" />
            </feature>


Keyboard.hideKeyboardAccessoryBar
=================

Hide the keyboard accessory bar with the next, previous and done buttons.

    Keyboard.hideKeyboardAccessoryBar(true);
    Keyboard.hideKeyboardAccessoryBar(false);

Supported Platforms
-------------------

- iOS


Keyboard.close
=================

Close the keyboard if it is open.

    Keyboard.close();

Supported Platforms
-------------------

- iOS

    
Keyboard.disableScroll
=================

Disable WebView scrolling when using Keyboard.resizeView

    Keyboard.disableScroll();

Supported Platforms
-------------------

- iOS


native.showkeyboard
=================

This event fires when the keyboard will be shown

    window.addEventListener('native.showkeyboard', keyboardShowHandler);
    
    function keyboardShowHandler(e){
        alert('Keyboard height is: ' + e.keyboardHeight);
    }

Properties
-----------

keyboardHeight: the height of the keyboard in pixels 


Supported Platforms
-------------------

- iOS, Android


native.hidekeyboard
=================

This event fires when the keyboard will hide

    window.addEventListener('native.hidekeyboard', keyboardHideHandler);
    
    function keyboardHideHandler(e){
        alert('Goodnight, sweet prince');
    }

Properties
-----------

None

Supported Platforms
-------------------

- iOS, Android
