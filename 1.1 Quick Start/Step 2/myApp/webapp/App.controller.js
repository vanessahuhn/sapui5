//In our controller, we load the Controller base class and extend it to define the behavior of our app. We also add the event handler for our button.
//The MessageToast is also loaded as a dependency. When the button is pressed, we now display a "Hello App" message.
sap.ui.define([
	"sap/ui/core/mvc/Controller",//we load the Controller base class
	"sap/m/MessageToast"//The MessageToast is also loaded as a dependency
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Quickstart.App", {//and extend it to define the behavior of our app
		onPress : function () {//We also add the event handler for our button
			MessageToast.show("Hello App!");//When the button is pressed, we now display a "Hello App" message
		}
	});

});