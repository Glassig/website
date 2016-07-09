var express = require("express");
var app = express();
var v_path = __dirname + '/views/';
var p_path = __dirname + '/public/';
var partials = v_path + '/partials/'
var fs = require('fs');

app.set('view engine', 'hbs')
//app.use(helmet());

app.use(express.static(p_path));

app.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

app.get("/",function(req,res){
	res.render('index');
});

app.get("/boxes", function(req,res){
	    var myfiles=[];
	fs.readdir(p_path + '/build/', function(err,files){
	    if(err) throw err;
	    files.forEach(function(file){
	        // do something with each file HERE!
	        var content = fs.readFileSync(partials + file, 'utf8');
	        myfiles.push(content);
	    });
	});
	res.render('boxes', {box: myfiles});
})

app.use("*",function(req,res){
	res.render('404');
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});


