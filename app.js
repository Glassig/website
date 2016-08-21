var express = require("express");
var app = express();
var v_path = __dirname + '/views/';
var p_path = __dirname + '/public/';
var box_location = p_path + 'build/'
var fs = require('fs');

app.set('view engine', 'hbs')

app.use(express.static(p_path));
app.use(express.static(__dirname+'/css/'));

app.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

app.get("/",function(req,res){
	res.render('index');
});

app.use("*",function(req,res){
	res.render('404');
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});


