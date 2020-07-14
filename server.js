
//Establishes PORT and brings in Express for us
var express = require("express");
var PORT = process.env.PORT || 7777;
var app = express();

//Serves Static content in the Public directory
app.use(express.static("public"));

//Parse Application Body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import Routes and give access to the server
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Starts Server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
