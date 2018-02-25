var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+"/public"))
app.set("view engine", "ejs")

app.get('/', function(req, res){
    res.render("wsn/home")
})

app.get('/about', function(req, res){
    res.render("wsn/about")
})

app.get('*', function(req, res){
    res.send('404 Page Not Found!')
})

app.listen(3000, 'localhost', function(){
    console.log("Server Started...")
})