//metalsmith.js
Metalsmith = require('metalsmith')
markdown = require('metalsmith-markdown')
layouts = require('metalsmith-layouts')
inplace = require('metalsmith-in-place')
//feed = require('metalsmith-feed')
//permalinks = require('metalsmith-permalinks')
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
	.use(beautify())
	.use(inplace({
		engine: 'handlebars'}))
	.source(dir.src)
    .destination(dir.build)
    .build(function (err) { if(err) console.log(err) })



//module.exports = metalsmith;