//Building the server
const express = require("express"); //Building the server. A server can be built in pure Node.js, but Express is simpler to work with.
//We already installed Express in Step 2, but we need to make sure it is included in this file specifically so we can use its methods. In Node.js, when you want to use a package in another file, you must require it.

//Initialise the server
//To initialise our server, we need to call the express() function. This will create an Express application for us to work with
const app = express();

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)

// app.get("/", function (req, res) {
//   res.send("Yay Node!");
//   console.log(req);
// });

// app.get("/", (req, res) => {
//   console.log(req.query);
//   res.json({ hello: ["world"] });
// });

// app.get("/", function (req, res) {
//   let searchQuery = req.query.search;
//   console.log(req.query);
//   res.send("Hello World! You searched for " + searchQuery);
// });

//Communicating with the server
//with handler functions

//What is a handler function?
// When a request reaches the server, we need a way of responding to it. In comes the handler function. The handler function is just a function which receives requests and handles them, hence the name.

// The handler function is always called with a request and response object. The response object is what gets sent back to the client. It contains the information that gets displayed in the web page. You can decide what to send back in your response.

// What does a handler function look like in Express?
// The get() method is one of the methods used to define a handler function in Express. It takes two parameters: the endpoint at which to trigger an action (we'll explain more about this in the next step), and the handler function that tells it exactly what to do

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

//What is an endpoint?
//An endpoint is the part of the URL which comes after /. For example: /chocolate is the "chocolate" endpoint. It's the URL to which you send a request.

app.get("/car", function (req, res) {
  res.json({ car: ["bmv", "citroen", "reno"] });
  console.log(req);
});

//Start 'listening' for potential requests
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
