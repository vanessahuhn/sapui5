//This file will be called as soon as SAPUI5 is loaded and initialized.
//We load two UI controls - a button and a message toast - and place the button
//in the element with the content ID. The button is defined with a text property and a callback attached to its press event.
/*sap.ui.define([
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

});*/

//Now we replace most of the code in this file: We remove the inline button from the previous step,
//and introduce a proper XML view to separate the presentation from the controller logic.
//We prefix the view name Quickstart.App with our newly defined namespace. The view is loaded asynchronously.
//Similar to the step before, the view is placed in the element with the content ID after it has finished loading.

sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";
	//we introduce a proper XML view to separate the presentation from the controller logic
	XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {//We prefix the view name Quickstart.App with our newly defined namespace
		oView.placeAt("content");//the view is placed in the element with the content ID after it has finished loading
	});
});