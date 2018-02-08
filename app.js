var express = require("express");
var http = require("http");
var path = require("path");
var handlebars  = require('express-handlebars'), hbs;

var app = express();
var router = require('./router')(app);

app.set("port", 3000);
app.set("static", path.join(__dirname + "static"))
app.set("views", path.join(__dirname + "/views"))

hbs = handlebars.create({
    defaultLayout: "main",
});

app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(app.get("static")));

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
