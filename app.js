var express = require("express");
var hbs = require('hbs');
var app = express();
var v_path = __dirname + '/views/';
var p_path = __dirname + '/public/';
var post_location = p_path + 'build/';
var fs = require('fs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(p_path));
app.use(express.static(__dirname+'/css/'));
app.use(express.static(__dirname+'/node_modules/materialize-css/dist/'))

app.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

app.get("/boxes", function(req,res){
	var all_boxes=[];
	var works = [];
	var edus = [];
	var utaks = [];
	fs.readdir(post_location, function(err,files){
	    if(err) throw err;
	    files.forEach(function(file){
	    	switch(file.split(':')[0]) {
	    		case 'work' :
	    			works.unshift(fs.readFileSync(post_location + file, 'utf8'));
	    			break;
	    		case 'edu' :
	    			edus.unshift(fs.readFileSync(post_location + file, 'utf8'));
	    			break;
	    		case 'utak' :
	    			utaks.unshift(fs.readFileSync(post_location + file, 'utf8'));
	    			break;
	    		case '.DS_Store':
	    			break;
	    	}
	    });
	});
	res.render('index', {work: works, edu: edus, utak: utaks});
})

app.get("/",function(req,res){
	res.render('index');
});

app.use("*",function(req,res){
	res.render('404');
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});


