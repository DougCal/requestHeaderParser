var os = require('os');
var express = require('express');
var app = express();

app.get('/', function (req, res){  
    var IP = req.ip;
    var lan = req.headers["accept-language"].split(',')[0];
    var softVers = os.release().split('.');
    var versPop = softVers.pop();
    var softPlat = os.type();
    
    
    var obj = {
        'ipaddress': IP,
        'language': lan,
        'software': softPlat + " " + softVers.join().replace(/,/,'.')
    };
    
    res.send(JSON.stringify(obj, null, '\t'));
});

var port = process.env.PORT;

app.listen(port, process.env.IP, function(){
    console.log('LISTENING');
});