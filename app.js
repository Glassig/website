//Now this is a separate branch

var express = require("express");
var app = express();
var v_path = __dirname + '/views/';
var p_path = __dirname + '/public/';
var box_location = p_path + 'build/'
var fs = require('fs');

app.set('view engine', 'hbs')

app.use(express.static(p_path));

app.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

app.get("/",function(req,res){
	res.render('index');
});

app.get("/boxes", function(req,res){
	var all_boxes=[];
	fs.readdir(box_location, function(err,files){
	    if(err) throw err;
	    files.forEach(function(file){
	        // do something with each file HERE!
	        if(file != '.DS_Store') { // BECAUSE WHY THE FUUUUUUUCK
		        var content = fs.readFileSync(box_location + file, 'utf8');
		        all_boxes.push(content);
		    }
	    });
	});
	res.render('boxes', {box: all_boxes});
})

app.use("*",function(req,res){
	res.render('404');
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});


