var express = require("express");

var router = express.Router();

// Import the model (customer.js) to use its database functions.
var customer = require("../models/customer.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) { 
    
    res.send("Hello Word");

});

module.exports = router;