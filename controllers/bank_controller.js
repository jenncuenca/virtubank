var express = require("express");
var router = express.Router();

// Import the model (customer.js) to use its database functions.

var db = require("../models");
var auth = require("../routes/auth.js");


// Create all our routes and set up logic within those routes where required.
router.get("/",function(req, res) {
   
   //res.send("Hello Word");
   res.sendFile(process.cwd() + "/public/assets/html/login.html");
});

// findAll returns all entries for a table when used with no options
router.get("/customers", function(req, res) {
if(req.isAuthenticated()){
   db.Customer.findAll({}).then(function(dbCustomers) {
     res.json(dbCustomers);
   });
  }
else {
  res.redirect('/');
}
 });


module.exports = router;