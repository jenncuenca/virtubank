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
const https = require("https");
const fs = require("fs");
const port = 8080;

//passport for user authentication
var passport   = require('passport')
var session    = require('express-session')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

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

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
var router = require('./controllers/bank_controller.js');
app.use('/', router);

//https server
//===============================================================
app.get('/', (req, res) => {
  res.send('WORKING!')
})

const httpsOptions = {
  key: fs.readFileSync('./privatekey.key'),
  cert: fs.readFileSync('./certificate.crt')
}
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
})


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
