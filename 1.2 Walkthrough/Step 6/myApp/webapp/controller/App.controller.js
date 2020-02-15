/*We define the app controller in its own file by extending the Controller object of the SAPUI5 core.
In the beginning it holds only a single function called onShowHello that handles the button's press event by showing an alert.*/
/*We extend the array of required modules with the fully qualified path to sap.m.MessageToast.
Once both modules, Controller and MessageToast, are loaded,
the callback function is called and we can make use of both objects by accessing the parameters passed on to the function.
This Asynchronous Module Definition (AMD) syntax allows to clearly separate the module loading from the code execution
and greatly improves the performance of the application. The browser can decide when and how the resources are loaded prior to code execution.*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"//We extend the array of required modules with the fully qualified path to sap.m.MessageToast.
], function (Controller, MessageToast) {
	"use strict";
	/*   The "use strict"; literal expression was introduced by ECMAScript 5.
	It tells the browser to execute the code in a so called “strict mode”.
	The strict mode helps to detect potential coding issues at an early state at development time,
	that means,for example, it makes sure that variables are declared before they are used.
	Thus, it helps to prevent common JavaScript pitfalls and it’s therefore a good practice to use strict mode.*/
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onShowHello: function () {
			// show a native JavaScript alert
			//alert("Hello World");
			MessageToast.show("Hello World");
		}
	});
});