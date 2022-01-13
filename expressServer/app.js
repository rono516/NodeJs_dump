var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

var server = http.createServer(app);

//get method in our server
app.get('/', function(req, res){
    res.send('<h1>app sent this!! Express Works</h1>');
});

app.get('/tasks', function(req, res){
    fs.readFile('./db.json',function(err, data){
        var tasks = JSON.parse(data.toString()).tasks;
        res.json(tasks);
    })

});


server.listen('3000', function(){
    console.log('server is listening port : 3000')
});