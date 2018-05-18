var express = require("express");
var router = express.Router();
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/login", function (req, res) {

  //res.send("Hello Word");
  res.sendFile(process.cwd() + "/public/assets/html/login.html");
});

router.get("/home", function (req, res) {

  //res.send("Hello Word");
  res.sendFile(process.cwd() + "/public/assets/html/home.html");
});


// findAll Customers
router.get("/customers", function (req, res) {

  db.Customer.findAll({}).then(function (dbCustomers) {

    res.json(dbCustomers);
  });

});

//get user login id and check against the database
router.post("/registeredCustomer", function (req, res) {

  db.Customer.findOne({
    where: {
      customer_email: req.body.customer_email
    }


  }).then(function (dbCustomers) {

    if (dbCustomers.customer_password === req.body.customer_password) {

      console.log("password matched");

      //res.json(dbCustomers);
      res.redirect("/home");
    } else {
      res.send('Please make sure your a resistered users & your creditials are ok !');

    }
  });
});

// router.post("/registeredCustomer", function (req, res) {
//   if (db.Customer.customer_password === req.body.customer_password) {
//     console.log("Password Matched - Redirect should work");
//     res.redirect("/home");
//   }
// })


// get all account of one customer
router.get("/customer/accts:id", function (req, res) {

  db.Account.findAll({
    where: {
      customer_no: req.params.id
    }
  }).then(function (dbAccounts) {

    res.json(dbAccounts);

  });
});

// get all account of one customer
router.get("/customer/txns/:id", function (req, res) {

  db.Txnjournal.findAll({
    where: {
      customer_no: req.params.id
    }
  }).then(function (dbTxns) {

    res.json(dbTxns);

  });

});

// get all account of one customer
router.get("/customer/loans/:id", function (req, res) {

  db.Loan.findAll({
    where: {
      customer_no: req.params.id
    }
  }).then(function (dbLoans) {

    res.json(dbLoans);

  });

});

router.get("/customer/all/:id", function (req, res) {

  var allObjects;

  db.Account.findAll({
    where: {
      customer_no: req.params.id
    }
  }).then(function (dbAccounts) {

    allObjects.push(dbAccounts);

  });
  db.Loan.findAll({
    where: {
      customer_no: req.params.id
    }
  }).then(function (dbLoans) {

    allObjects.push(dbLoans);

  });

  db.Txnjournal.findAll({
    where: {
      customer_no: req.params.id
    }
  }).then(function (dbTxns) {

    allObjects.push(dbTxns);

  });
  console.log(allObjects);
  res.json(allObjects);

});


router.post("/newCustomer", function (req, res) {
  console.log('REQ BACKEND POST: ' + req);
  db.Customer.create({
    // id: Math.floor((Math.random() * 1000) + 4),
    customer_name: req.body.userName,
    customer_email: req.body.userEmail,
    customer_phone: req.body.userPhone,
    customer_address: req.body.userAddress,
    customer_loginid: req.body.userID,
    customer_password: req.body.userPw
  }).then(newUser => {
    console.log("New user created: " + newUser.customer_name)
    res.redirect("/home");
  });

});

// db.Account.create({
//   id: Math.floor((Math.random() * 1000) + 4),
//   customer_no: db.Customer.id,
//   ac_balance: '200',
//   ac_currency: 'USD'
// })



module.exports = router;