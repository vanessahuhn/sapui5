//In our controller, we load the Controller base class and extend it to define the behavior of our app. We also add the event handler for our button.
//The MessageToast is also loaded as a dependency. When the button is pressed, we now display a "Hello App" message.
/*The onPress function now also triggers the navigation to the intro page.
We fetch the app control by its ID and instruct it to navigate by calling the to method.
The onInit method is a lifecycle hook that is called automatically when the controller is initialized.
It defines a simple JSON model with some texts located at the features key.
We display these texts on the second page using data binding.
The InfoLabel tag from our view is a template that is repeated as many times as we have entries in our model.
Finally, we make the Panel in the lower part of the view interactive by attaching an onChange event to the switch defined there.*/
sap.ui.define([
	"sap/ui/core/mvc/Controller", //we load the Controller base class
	"sap/m/MessageToast", //The MessageToast is also loaded as a dependency
	"sap/ui/model/json/JSONModel" //we load the JSONModel base class
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("Quickstart.App", { //and extend it to define the behavior of our app

		onPress: function () { //We also add the event handler for our button
			//MessageToast.show("Hello App!");//When the button is pressed, we now display a "Hello App" message
			MessageToast.show("Hello UI5!");
			this.byId("app").to(this.byId("intro")); //The onPress function now also triggers the navigation to the page with "into" id.
			//We fetch the app control by its ID and instruct it to navigate by calling the to method.
		},

		onInit: function () { //The onInit method is a lifecycle hook that is called automatically when the controller is initialized.
			this.getView().setModel(new JSONModel({ //It defines a simple JSON model with some texts located at the features key.
				features: [ //We display these texts on the second page using data binding.
					"Enterprise-Ready Web Toolkit",
					"Powerful Development Concepts",
					"Feature-Rich UI Controls",
					"Consistent User Experience",
					"Free and Open Source",
					"Responsive Across Browsers and Devices"
				]
			}));
		},
		//Finally, we make the Panel in the lower part of the view interactive by attaching an onChange event to the switch defined there.
		onChange: function (oEvent) {
			var bState = oEvent.getParameter("state");
			this.byId("ready").setVisible(bState);
		}
	});

});