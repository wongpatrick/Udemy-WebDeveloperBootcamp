var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
// APP config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

/*Blog.create({
    title: "Test Blog",
    image: "https://images.unsplash.com/photo-1522198428577-adf2d374b05b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8c7a9980900ca8adf70b1d9ad7487a4&auto=format&fit=crop&w=1350&q=80",
    body: "Hello this is a blog post!"
});*/
// RESTFUL Routes

// Landing
app.get("/", function(req,res){
    res.redirect("/blogs");
})

// Index
app.get("/blogs", function(req,res){
    Blog.find({}, function(err, blogs){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs})
        }
    });
});

app.get("/blogs/new", function(req,res){
    res.render("new");
})

app.post("/blogs", function(req,res){
    Blog.create(req.body.blog, function(err, newBlog){
        if (err) {
            res.render("new");
        } else {
            res.redirect("blogs")
        }
    });
});

app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err) {
            res.redirect("/blogs");
            console.log(err)
        } else {
            res.render("show",{blog: foundBlog});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
})