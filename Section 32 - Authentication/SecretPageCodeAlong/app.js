var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost/auth_demo_app");
   

var app = express();
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'ejs');
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
    

app.get("/", function(req,res){
    res.render("home");
});

app.get("/secret", function(req,res){
    res.render("secret");
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server has started");
})