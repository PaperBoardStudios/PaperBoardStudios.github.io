var express = require("express");

var app = express();

var port = 8000;
var url = "https://paperboardstudios.github.io/";

app.set("view engine", 'ejs');

app.use("/dist", express.static("dist"));
app.use("/images", express.static("images"));
app.use("/dist/webfont", express.static("webfont"));

app.get("/",function(req,res){
  console.log("SERVER - opening index");
  res.render("index");
});

app.get("/us",function(req,res){
  console.log("SERVER - opening index-us");
  res.render("index-us");
});

app.get("/gallery",function(req,res){
  console.log("SERVER - opening gallery");
  res.render("gallery");
});
app.get("/gallery-us",function(req,res){
  console.log("SERVER - opening gallery-us");
  res.render("gallery-us");
});
app.get("/despertar-das-cinzas",function(req,res){
  console.log("SERVER - opening eventually");
  res.render("despertar-das-cinzas");
});
app.get("/despertar-das-cinzas-us",function(req,res){
  console.log("SERVER - opening eventually-us");
  res.render("despertar-das-cinzas-us");
});

app.get("*",function(req,res){
  console.log("SERVER - url not found");
  res.render("404");
});

app.listen(port,function(){
  console.log("SERVER - Listening on:  "+ port);
});