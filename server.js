var restify = require('restify');


var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require('fs');
var port = process.env.port || 1337;
var apiHandler = require('./api_handler');


var server = restify.createServer({
    name: 'usersTest'
});


server.get('/', function (req,res) {
    fs.readFile(path.join(__dirname,'pages/index.html'),"utf8", function(err, file) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write(err + "\n");
            res.end();
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(file);
        res.end();
    })

})

server.listen(port, function () {
    console.log('server running on port ' + port);
});