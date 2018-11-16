var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var db = require("./models");

var PORT = 4000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nyt-articles";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/api/articles", function(req, res) {
  db.Article.find()
    .then(function(articles) {
      res.json(articles);
    })
});

app.post("/api/articles", function(req, res) {
  let article = new db.Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url,
  });

  db.Article.create(article).then(function(article) {
    res.json(article);
  });
});

app.delete("/api/articles/:id", function(req, res) {
  db.Article.deleteOne({_id: req.params.id})
    .then(result => {
      res.json(result);
    });
});

app.listen(process.env.PORT || PORT, function() {
  console.log("App running on port: " + PORT);
});