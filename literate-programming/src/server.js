var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('/app/src/routes.js');
routes(app);

app.get('/', function(req, res) {
    res.sendFile('/app/src/index.html');
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, '0.0.0.0');

// exit with ctrl-c when started standalone
process.on('SIGINT', function() {
    console.log(": Caught interrupt signal, exiting...");
    process.exit();
});

console.log('Web server started on: ' + port);
