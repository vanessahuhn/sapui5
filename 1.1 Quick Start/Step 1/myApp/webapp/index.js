//This file will be called as soon as SAPUI5 is loaded and initialized.
//We load two UI controls - a button and a message toast - and place the button
//in the element with the content ID. The button is defined with a text property and a callback attached to its press event.
sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";
	//We load two UI controls
	new Button({//a button
		text: "Ready...",//**The button is defined with a text property
		press: function () {//**and a callback attached to its press event.
			MessageToast.show("Hello World!");//and a message toast
		}
	}).placeAt("content");//and place the buttonin the element with the "content" ID in the index.html file

});

