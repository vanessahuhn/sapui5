/*Now, we create a new index.js script that will contain the application logic for this tutorial step.
We do this to avoid having executable code directly in the HTML file for security reasons.
This script will be called by the index.html. We defined it there as a module in a declarative way.*/

/*Instead of using native JavaScript to display a dialog we want to use a simple SAPUI5 control.
Controls are used to define appearance and behavior of parts of the screen.
In the example above, the callback of the init event is where we now instantiate a SAPUI5 text control.
The name of the control is prefixed by the namespace of its control library sap/m/
and the options are passed to the constructor with a JavaScript object. For our control we set the text property to the value “Hello World”.
We chain the constructor call of the control to the standard method placeAt that is used
to place SAPUI5 controls inside a node of the document object model (DOM) or any other SAPUI5 control instance.
We pass the ID of a DOM node as an argument. As the target node we use the body tag of the HTML document and give it the ID content.
All controls of SAPUI5 have a fixed set of properties, aggregations, and associations for configuration.
You can find their descriptions in the Demo Kit.
In addition, each controls comes with a set of public functions that you can look up in the API reference.*/
/*We replace the instantiation of the sap.m.Text control by our new App XML view.
The view is created by a factory function of SAPUI5 which makes sure that the view is correctly configured and can be extended by customers.
The name is prefixed with the namespace sap.ui.demo.walkthrough.view in order to uniquely identify this resource.*/
sap.ui.define([
	/*"sap/m/Text"*/ //The name of the control is prefixed by the namespace of its control library sap/m/
	"sap/ui/core/mvc/XMLView" //We replace the instantiation of the sap.m.Text control by our new App XML view.
	/*], function (Text) {*/
], function (XMLView) {
	"use strict";

	/*alert("UI5 is ready");*/
	/*	new Text({//the options are passed to the constructor with a JavaScript object
			text: "Hello World"//we set the text property to the value “Hello World”
		}).placeAt("content");//We chain the constructor call of the control to the standard method placeAt that is used
							  //to place SAPUI5 controls inside a node of the document object model (DOM) or any other SAPUI5 control instance.
							  //We pass the ID of a DOM node as an argument.
							  //As the target node we use the body tag of the HTML document and give it the ID "content".*/
	//The view is created by a factory function of SAPUI5 which makes sure that the view is correctly configured and can be extended by customers.
	XMLView.create({
		//The name is prefixed with the namespace sap.ui.demo.walkthrough.view in order to uniquely identify this resource.
		viewName: "sap.ui.demo.walkthrough.view.App"//
	}).then(function (oView) {
		oView.placeAt("content");
	});
});