/*We define the app controller in its own file by extending the Controller object of the SAPUI5 core.
In the beginning it holds only a single function called onShowHello that handles the button's press event by showing an alert.*/
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	/*   The "use strict"; literal expression was introduced by ECMAScript 5.
	It tells the browser to execute the code in a so called “strict mode”.
	The strict mode helps to detect potential coding issues at an early state at development time,
	that means,for example, it makes sure that variables are declared before they are used.
	Thus, it helps to prevent common JavaScript pitfalls and it’s therefore a good practice to use strict mode.*/
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onShowHello: function () {
			// show a native JavaScript alert
			alert("Hello World");
		}
	});
});