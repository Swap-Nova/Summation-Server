## Why use Express .js?
* It is a Node .js framework. Helps in organization & structuring the code. Built to write less repetitive codes in web applications.

```javascript
npm install express
```

## How to test?

* Since it is an basic code structure, the server is not displayed. Therefore, to test it the user can clone the repo.
* Furthermore, the code contains an port assigned to it. Using terminal type in ```node server.js``` to start server at host 3000.
```javascript
// creating a port number
app.listen(3000,function(){
    console.log("Server started at port 3000");
});
```

## Working with Routers
* The first parameter ‘/’ specifies the route we are responding to.
```javascript
app.get("/",function(req,res)
```
* To avoid restarting the server all the time once we add new code, we use <b>Nodemon</b>
* To use nodemon, inside the terminal navigage to your file directory and type:
``` javascript
nodemon server.js
```

## How to integrate server with html forms?
* To get the data of the number on the server side for the calculation and send the output of the calculation to the client we have to use body ```parsing```
```javascript
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
```
* ```urlencoded```- parse data that comes from an HTML form. 
* In addition, we add an option extended and set the option to be true. The setting, the option to true allows us to post nested objects. 
* It also helps in passing HTTP Requests. 
