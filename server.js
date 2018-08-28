// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require("dotenv").config();
var omdb = require("./keys")
var request = require("request")
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");
var MySQLStore = require('express-mysql-session')(session);
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");
var expressValidator = require("express-validator");
var Sequelize = require("sequelize");
var passport = require("passport");
//var client = require("./keys.js");
// var Moviedb = require("moviedb");
//var OmdbApi = require('omdb-client');
// var OmdbApi = require('omdb')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var saltRounds = 10;

// express-mysql-sessions settings
var options = {
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "ownflix"
};

var sessionStore = new MySQLStore(options);

// Express-Session cookie config
app.use(
  session({
    secret: "somestuffhere", //this is a salt
    resave: false,
    store: sessionStore,
    saveUninitialized: false, //prevent cookie unless logged in
    cookie: { secure: false }
  })
);

// Requiring our models for syncing
var db = require("./models");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// Passport.js login verification
passport.use(new LocalStrategy(
  {usernameField: "email"},
  function(username, password, done) {
    console.log(username);
    console.log(password);
    // use sequelize to query... instead of raw query
    db.User.findAll({
      limit: 1,
      where: {
        email: username
      }
    }).then(function(results){
    console.log(results)
    var hash = results[0].password;
    console.log(hash);
    console.log(password);
    bcrypt.compare(password, hash, function(err, res) {
      if (res === true) {
        return done(null, {userId: results[0].id});
      } else {
        return done(null, false);
      }
    })
    })
  }
));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false }; 

//access the keys
// var clientmoviedb = new Moviedb(client.moviedb);
// var clientomdb=  new OmdbApi(client.omdb);

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
