var express = require("express");

var app = express();

var port = 8000;
var url = "https://paperboardstudios.github.io/";

app.set("view engine", 'ejs');

app.use("/dist", express.static("dist"));
app.use("/images", express.static("images"));

app.get("/",function(req,res){
  res.set('Content-Type', 'text/html');
  res.render("index");
});

app.get("/us",function(req,res){
  res.render("index-us");
});

app.get("/gallery",function(req,res){
  res.render("gallery");
});
app.get("/gallery-us",function(req,res){
  res.render("gallery-us");
});
app.get("/despertar-das-cinzas",function(req,res){
  res.render("despertar-das-cinzas");
});
app.get("/despertar-das-cinzas-us",function(req,res){
  res.render("despertar-das-cinzas-us");
});
app.get("*",function(req,res){
  res.render("404");
});

app.listen(port,function(){
  console.log("SERVER - Listening on:  "+ url);
});