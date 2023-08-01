# THIRD PROJECT: JOURNAL WEATHER APP
For this project, I have wrote most of your code in two files: server.js and website/java.js. Where thw app foler contains of frontend-folder, and inside that folser the:

# Project Directories
## java.js/
![javajs](https://github.com/AsmahSaid/readme/assets/87110713/446e2b7e-3f16-4ebc-a5a1-7fe162e59506)
## index.html/
![index](https://github.com/AsmahSaid/readme/assets/87110713/c19d7428-2790-488f-93d3-fd04a3f47da5)
## and style.css
![styles](https://github.com/AsmahSaid/readme/assets/87110713/bcbdf458-bb61-467f-a550-673a3c94e683)

### and server.js
And outside the frontend foler (in the main root there is a server file)
![server](https://github.com/AsmahSaid/readme/assets/87110713/1bb75bfe-485b-4e1b-bf8e-3215c52ce0e2)

<br />

# Table of Contents
## necessary reuired Setup

1- Node and Express Environment
Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.
The Express app instance should be pointed to the project folder with .html, .css, and .js files.
![nodde](https://github.com/AsmahSaid/readme/assets/87110713/e6a39e2c-5e3d-4a8d-ae81-778abb50beb0)

2- Local Server:
Local server should be running and producing feedback to the Command Line through a working callback function.

3- API Credentials
Create API credentials on OpenWeatherMap.com
![weathermap](https://github.com/AsmahSaid/readme/assets/87110713/90f0693e-c13a-4a61-b22a-3c62a30fc608)

       **The actual API key itself will be different for everyone.
       **Notice the last part ‘&units=imperial’-- this should be included in the saved variable.

*********************************************************
## APIs and Routes

1- APP API Endpoint
	
There should be a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.projectData = {
}

2- Integrating OpenWeatherMap API
	
The personal API Key for OpenWeatherMap API is saved in a named const variable.
The API Key variable is passed as a parameter to fetch().
Data is successfully returned from the external API.

3- Return Endpoint Data && GET Route I: Server Side
	
There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

4- Return Endpoint Data && GET Route II: Client Side
	
There should be an asynchronous function to fetch the data from the app endpoint

5- POST Route
	

You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.

The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.

The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.
***********************************************************

## Dynamic UI

1- Naming HTML Inputs and Buttons For Interaction

2- Assigning Element Properties Dynamically:
	
3- Event Listeners:

4- Dynamically Update UI:
<br />
# PROJECT OUTPUT OF THE SERVER
<br>
first you have to run the app, after that enter the (http://localhost:8000/index.html)
to get the expected output you have to enter a zip code for any USA city
</br>

![weatherjouralapp](https://github.com/AsmahSaid/readme/assets/87110713/61903379-4f5d-48ff-9fc4-249f7aa96cbc)
