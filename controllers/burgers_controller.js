var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        consolee.log(hbsOject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json ({id: result.insertId});
    });
});









module.exports = router;