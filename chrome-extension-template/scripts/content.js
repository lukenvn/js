/**
 * Created by luke on 03/24/2018.
 */
"use strict";
var Content = Content || {};
Content.control = {
   sayHelloToBG:function () {
       Utils.sendNotification("hello from Content");
   }
};
var Utils = {
    sendNotification: function (value) {
        chrome.runtime.sendMessage({"message": "fromContent", "ms": value});
    }
};
setTimeout(function () {
    Content.control.sayHelloToBG();
}, 500);
