/**
 * Created by luke on 03/24/2018.
 */
"use strict";
var Background = Background || {};
Background.control = {
    registerListenerPageAction: function () {
        console.log("Background registerListenerPageAction running")
        chrome.runtime.onInstalled.addListener(function () {
            chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
                chrome.declarativeContent.onPageChanged.addRules([{
                    conditions: [new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {urlContains: '.'},
                    })
                    ],
                    actions: [new chrome.declarativeContent.ShowPageAction()]
                }]);
            });
        });
    }
    ,
    registerListenerMessage: function () {
        console.log("Background registerListenerMessage running")
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.message === "fromPopup") {
                console.log("fromPopup: " + request.ms);
            }
            else if (request.message === "fromContent") {
                console.log("fromContent: " + request.ms);
            }
        });
    }
};
Background.control.registerListenerMessage();
Background.control.registerListenerPageAction();