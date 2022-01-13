var fs = require('fs'), path = require('path');
//console.log('hello world');

fs.writeFile('./hello.txt', 'What the hell??', function(err){
    if(!err){
        fs.readFile('./hello.txt', function(err, data){

            if(!err){
                console.log(data.toString());
            }
        });
    }

});
//console.log(1+"2"+"2")