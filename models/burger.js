//Import ORM to use in functions
var orm = require("../config/orm.js");

var burger = {
//Selects all burgers in MySQL Table
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
//Creates a New Burger
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
//Allows Changes to be Made to Burgers
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
//Deletes Burgers
    delete: function (col, val, cb) {
      orm.delete("burgers", col, val, function(res){
        cb(res);
      })
    }
  };

  //Export Database for the controller
  module.exports = burger;
  