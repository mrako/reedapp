var morgan  = require('morgan');
var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(morgan('dev', {format: 'dev', immediate: true}));
app.use(express.static(__dirname + '/www'));

app.disable('etag');

module.exports = app.listen(app.get('port'), function() { });

app.listen(port, function() {
  console.log("Listening on " + port);
});
