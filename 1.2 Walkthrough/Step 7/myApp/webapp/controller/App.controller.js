/*We define the app controller in its own file by extending the Controller object of the SAPUI5 core.
In the beginning it holds only a single function called onShowHello that handles the button's press event by showing an alert.*/
/*We extend the array of required modules with the fully qualified path to sap.m.MessageToast.
Once both modules, Controller and MessageToast, are loaded,
the callback function is called and we can make use of both objects by accessing the parameters passed on to the function.
This Asynchronous Module Definition (AMD) syntax allows to clearly separate the module loading from the code execution
and greatly improves the performance of the application. The browser can decide when and how the resources are loaded prior to code execution.*/
/*We add an init function to the controller.
onInit is one of SAPUI5’s lifecycle methods that is invoked by the framework when the controller is created,
similar to a constructor function of a control.
Inside the function we instantiate a JSON model.
The data for the model only contains a single property for the “recipient”,
and inside this it also contains one additional property for the name.
To be able to use this model from within the XML view, we call the setModel function on the view and pass on our newly created model.
The model is now set on the view.
The message toast is just showing the static "Hello World" message. We will show how to load a translated text here in the next step.*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast", //We extend the array of required modules with the fully qualified path to sap.m.MessageToast.
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	/*   The "use strict"; literal expression was introduced by ECMAScript 5.
	It tells the browser to execute the code in a so called “strict mode”.
	The strict mode helps to detect potential coding issues at an early state at development time,
	that means,for example, it makes sure that variables are declared before they are used.
	Thus, it helps to prevent common JavaScript pitfalls and it’s therefore a good practice to use strict mode.*/
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		//We add an init function to the controller.
		//onInit is one of SAPUI5’s lifecycle methods that is invoked by the framework when the controller is created,
		//similar to a constructor function of a control.
		onInit: function () {
			// set data model on view
			//The data for the model only contains a single property for the "recipient",
			//and inside this, it also contains one additional property for the name.
			var oData = {
				recipient: {
					name: "World"
				}
			};
			//Inside the function we instantiate a JSON model.
			var oModel = new JSONModel(oData);
			//To be able to use this model from within the XML view, we call the setModel function on the view and pass on our newly created model.
			this.getView().setModel(oModel);//The model is now set on the view.
		},
		onShowHello: function () {
			// show a native JavaScript alert
			//alert("Hello World");
			MessageToast.show("Hello World");//The message toast is just showing the static "Hello World" message.
		}
	});
});