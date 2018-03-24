/**
 * Created by luke on 03/24/2018.
 */
"use strict";
var Popup =  Popup||{};
var sendToBGBtn;
Popup.control = {
    btnListener: function () {
        sendToBGBtn = $('#sendToBackground');
        sendToBGBtn.click(function () {
            Popup.control.sendNotification("hello");
        });
    },
    sendNotification: function (value) {
        chrome.runtime.sendMessage({"message": "fromPopup", "ms": value});
    }
};
$(function () {
    Popup.control.btnListener();
});
