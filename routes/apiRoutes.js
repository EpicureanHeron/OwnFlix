var db = require("../models");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session");
var bcrypt = require("bcrypt");
var expressValidator = require("express-validator");
var mysql = require("mysql")
var saltRounds = 10;
var Sequelize = require("sequelize");

let sequelize = new Sequelize("ownflix", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  
  app.get("/login", function(req, res, next){
    console.log("you are logging in...")
  })

  // Login logic
  app.post("/login", passport.authenticate(
    "local", {
      successRedirect: "/Dashboard",
      failureRedirect: "/"
    }
  ));

  app.get("/register", function(req, res){
    console.log("you are on register")

  });

  app.post("/register", function(req, res) {
    console.log("Registering...")
    req.checkBody("email", "Please use a valid email.").isEmail();
    req.checkBody("password", "Please use a valid email").notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      // res.render("index", {title: "Registration error"})
      console.log("error registering")
    } else {

    var email = req.body.email;
    var password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
      // Store hash in your password DB.
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }).then(function(){
      db.User.findAll({
        limit: 1,
        where: {
          email: email
        },
        order: [["createdAt", "DESC"]]
      }).then(function(userIDquery){
        var userID = userIDquery[0]
        req.login(userID, function(error){
          res.redirect("/Dashboard")
        })
      })
    })
  });
  }
  });

// SERIALIZATION
  //serialize the user
  passport.serializeUser(function(userID, done){
    console.log("Serialized: User id is saved to the session file here")
    done(null, userID);
  })

  //deserialize the user
  passport.deserializeUser(function(userID, done){
    console.log("Deserialized: User id is saved to the session file here")
    done(null, userID);
  })


  app.post("/api/movies", function(req, res) {
 
    if(req.user.id){
      var userid = req.user.id
    }
    else{
      var userid = req.user.userId
    }
    
    db.Movie.create({
      title: req.body.title,
      loanStatus: false,
      omdbKey: req.body.omdbKey,
      plot: req.body.plot,
      poster: req.body.poster,
      actors: req.body.actors,
      director: req.body.director,
      UserId: userid
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function() {
      res.json(dbExample);
    });
  });
};