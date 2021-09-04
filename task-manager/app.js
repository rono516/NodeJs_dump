//http_server:
var http = require('http');
var events = require('events')

var eventEmitter = new events.EventEmitter();

var server = http.createServer( function(req, res){
    eventEmitter.emit('someone requested', );// event emitter
    res.end('server works');
});

eventEmitter.on('someone requested', function(){
    console.log('a request has been done on the server');
});// event listener

server.listen(3000, 'localhost', function(){
    console.log('server started on port: 3000')
});
//angular- creating single page applications e.g email. uses components
//react - creating easy to refresh pages e.g facebook.
// comments which do not need a whole page to refresh
//7.35// read from server nodejs
//7.47
//MERN FULL STACK APPLICATION 9.00.00 Use Reacrt in placwe of angular
//7.42//MEAN full stack web application, client server and database