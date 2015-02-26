/** BASIC NODE EXPRESS SERVER SET-UP
*/

/** * Module dependencies
 */
// require the node module called express
var express = require('express');
//require the native node module http
var http = require('http');
//set app to express to invoke later as app()
var app = express();

app.use(express.static(__dirname+"/public"));

// use the native node module http to createServer
var server = http.createServer(app);

 /** * Configuration*/
// all environments
//No configurattion in this simple example

/**Routes*/
// On "/" give response 'index.html' relative to root
app.get('/', function(req, res, next){
  res.sendFile('index.html', {root: __dirname});
});

//app.get('/', routes.index);
 // JSON API
//app.get('/api/name', api.name);
// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);

server.listen(3000, function(){console.log("listening now on 3000")
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

