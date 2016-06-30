var express = require("express");
var app = express();
var v_path = __dirname + '/views/';
var p_path = __dirname+'/public';
/*
  'https://www.facebook.com/angelina.vongegerfelt',
  'github.com/glassig',
  'https://www.linkedin.com/in/angelina-von-gegerfelt-8a8558108?trk=hp-identity-name',
  'angelina.v.gegerfelt@gmail.com'
*/
app.set('view engine', 'hbs')
//app.use(helmet());

app.use(express.static(__dirname+'/public'));

app.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

app.get("/",function(req,res){
	res.render('index');
});

app.get("/boxes", function(req,res){
	res.render('boxes');
})
/*
app.get("/about",function(req,res){
	res.sendFile(v_path + "about.html");
});

app.get("/contact",function(req,res){
	res.sendFile(v_path + "contact.html");
});

*/
app.use("*",function(req,res){
	res.render('404');
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});
