// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require('express-handlebars');

//passport for user authentication
var passport   = require('passport')
var session    = require('express-session')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(process.cwd() + '/public/assets'));

//Sets up the handlebar engine.
//==================================================================

app.set('views','./views');
console.log('./views');
app.engine('handlebars', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'handlebars');


// Routes
// =============================================================
var router = require('./controllers/bank_controller.js');
app.use('/', router);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
