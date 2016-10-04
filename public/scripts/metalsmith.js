//metalsmith.js
Metalsmith = require('metalsmith')
markdown = require('metalsmith-markdown')
layouts = require('metalsmith-layouts')
inplace = require('metalsmith-in-place')
beautify = require('metalsmith-beautify')

dir = {
	src : __dirname + '/../src/',
	build : __dirname + '/../build',
	layout : __dirname + '/../layouts'
}

Metalsmith(__dirname)
	.use(markdown())
	.use(layouts({
		engine: 'handlebars',
		default: 'boxes.hbs',
		directory: dir.layout
	}))
	.use(inplace({
		engine: 'handlebars'}))
	.use(beautify())
	.source(dir.src)
    .destination(dir.build)
    .build(function (err) { if(err) console.log(err) })



//module.exports = metalsmith;