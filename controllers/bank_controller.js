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


// get user login id and check against the database
router.post("/registeredCustomer", function(req, res) {

  db.Customer.findOne({
      where: {customer_email: req.body.customer_email}
  }).then(function(dbCustomers) { 

      if (dbCustomers.customer_password === req.body.customer_password)
        {

           res.sendFile(process.cwd() + "/public/assets/html/home.html");
          // res.json(dbCustomers);

        } 
          else 
        { 
          res.send('Please make sure your a resistered users & your creditials are ok !');   
        }
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



  });




module.exports = router;