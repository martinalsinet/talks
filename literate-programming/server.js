var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('/app/routes.js');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, '0.0.0.0');

console.log('Web server started on: ' + port);
