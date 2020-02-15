/*The content of the manifest.json file is a configuration object in JSON format that contains all global application settings and parameters.
The manifest file is called the descriptor for applications, components, and libraries
and is also referred to as “descriptor” or “app descriptor” when used for applications.
It is stored in the webapp folder and read by SAPUI5 to instantiate the component.
There are three important sections defined by namespaces in the manifest.json file:
	* sap.app
		The sap.app namespace contains the following application-specific attributes:
			** id (mandatory): The namespace of our application component
				The ID must not exceed 70 characters. It must be unique and must correspond to the component ID/namespace.
			** type: Defines what we want to configure, here: an application
			** i18n: Defines the path to the resource bundle file
			** title: Title of the application in handlebars syntax referenced from the app's resource bundle
			** description: Short description text what the application does in handlebars syntax referenced from the app's resource bundle
			** applicationVersion: The version of the application to be able to easily update the application later on
	* sap.ui
		The sap.ui namespace contributes the following UI-specific attributes:
			** technology: This value specifies the UI technology; in our case we use SAPUI5
			** deviceTypes: Tells what devices are supported by the app: desktop, tablet, phone (all true by default)
	* sap.ui5
		The sap.ui5 namespace adds SAPUI5-specific configuration parameters that are automatically processed by SAPUI5.
		The most important parameters are:
			** rootView: If you specify this parameter, the component will automatically instantiate the view and use it as the root for this component
			** dependencies: Here we declare the UI libraries used in the application
			** models: In this section of the descriptor we can define models that will be automatically instantiated by SAPUI5 when the app starts.
			Here we can now define the local resource bundle. We define the name of the model "i18n" as key
			and specify the bundle file by namespace. As in the previous steps, the file with our translated texts is stored in the i18n folder
			and named i18n.properties. We simply prefix the path to the file with the namespace of our app.
			The manual instantiation in the app component's init method will be removed later in this step.
For compatibility reasons the root object and each of the sections state the descriptor version number 1.1.0 under the internal property _version.
Features might be added or changed in future versions of the descriptor
and the version number helps to identify the application settings by tools that read the descriptor.
Properties of the resource bundle are enclosed in two curly brackets in the descriptor.
This is not a SAPUI5 data binding syntax, but a variable reference to the resource bundle in the descriptor in handlebars syntax.
The referred texts are not visible in the app built in this tutorial but can be read by an application container like the SAP Fiori launchpad.*/

/*In the resources section of the sap.ui5 namespace, additional resources for the app can be loaded.
We load the CSS styles by defining a URI relative to the component.
SAPUI5 then adds this file to the header of the HTML page as a <link> tag, just like in plain Web pages, and the browser loads it automatically.*/

{
  "_version": "1.12.0",
  "sap.app": {
	"id": "sap.ui.demo.walkthrough",//id (mandatory): The namespace of our application component
									//The ID must not exceed 70 characters. It must be unique and must correspond to the component ID/namespace.
	"type": "application",//type: Defines what we want to configure, here: an application
	"i18n": "i18n/i18n.properties",//i18n: Defines the path to the resource bundle file
	"title": "{{appTitle}}",//title: Title of the application in handlebars syntax referenced from the app's resource bundle
	"description": "{{appDescription}}",//description: Short description text what the application does in handlebars syntax referenced from the app's resource bundle
	"applicationVersion": {//applicationVersion: The version of the application to be able to easily update the application later on
	  "version": "1.0.0"
	}
  },
  "sap.ui": {
	"technology": "UI5",//technology: This value specifies the UI technology; in our case we use SAPUI5
	"deviceTypes": {//deviceTypes: Tells what devices are supported by the app: desktop, tablet, phone (all true by default)
		"desktop": true,
		"tablet": true,
		"phone": true
	}
  },
  "sap.ui5": {
	"rootView": {//rootView: If you specify this parameter, the component will automatically instantiate the view and use it as the root for this component
		"viewName": "sap.ui.demo.walkthrough.view.App",
		"type": "XML",
		"async": true,
		"id": "app"
	},
	"dependencies": {//dependencies: Here we declare the UI libraries used in the application
	  "minUI5Version": "1.60",
	  "libs": {
		"sap.m": {}
	  }
	},
	"models": {//models: In this section of the descriptor we can define models that will be automatically instantiated by SAPUI5
			   //when the app starts. Here we can now define the local resource bundle. We define the name of the model "i18n" as key
			   //and specify the bundle file by namespace. As in the previous steps, the file with our translated texts is stored in the i18n folder
			   //and named i18n.properties. We simply prefix the path to the file with the namespace of our app.
			   //The manual instantiation in the app component's init method will be removed later in this step.
	  "i18n": {
		"type": "sap.ui.model.resource.ResourceModel",
		"settings": {
		  "bundleName": "sap.ui.demo.walkthrough.i18n.i18n"
		}
	  }
	},
	,
	"resources": {
	  "css": [
		{
		  "uri": "css/style.css"
		}
	  ]
	}
  }
}
