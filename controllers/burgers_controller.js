//Declare Required Variables, Import Database Functions
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//Renders Home Directory
router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Posts new Burger
router.post("/api/burgers", function (req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json ({id: result.insertId});
    });
});

//Updates Burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.body.devoured);
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

//Deletes Burger
  router.delete("/api/burgers/:id", function(req, res) {
    let burgerId = req.params.id;  
    burger.delete("id", burgerId, function(result) {
      res.status(200).end();
    });
  });

//Export to Server.js
  module.exports = router;








module.exports = router;