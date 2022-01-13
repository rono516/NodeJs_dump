//calling the http librarry
var http = require('http');
var url = require('url');
//createServer
var server = http.createServer(function(req, res){
    //setting content header
    res.writeHead(200, ('Content-Type', 'text/html'));
    var q = url.parse(req.url, true).query;
    var txt = q.year + ""+ q.month;
    //sending string response
    res.end(txt) ;
});
server.listen(8082);