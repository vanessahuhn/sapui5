/*Now, we create a new index.js script that will contain the application logic for this tutorial step.
We do this to avoid having executable code directly in the HTML file for security reasons.
This script will be called by the index.html. We defined it there as a module in a declarative way.*/
sap.ui.define([

], function () {
	"use strict";

	alert("UI5 is ready");
});