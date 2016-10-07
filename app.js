var express = require("express");
var hbs = require('hbs');
var favicon = require('serve-favicon');
var fs = require('fs');

var app = express();
var v_path = __dirname + '/views/';
var p_path = __dirname + '/public/';
var post_location = p_path + 'build/';

app.use(favicon(p_path + 'images/favicon.ico'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(p_path));
app.use(express.static(__dirname+'/css/'));

var posts = getPosts();

app.get("/", function(req,res){
	res.render('index', {work: posts.works, edu: posts.edus, utak: posts.utaks});
})

function getPosts() {
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
	return {
		works: works,
		edus: edus,
		utaks: utaks
	};
}
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Live at Port " + port);
});


