var express = require('express');
var app = express();

app.use(express.static('.'));

app.listen(3030, function () {
	console.log('listening on 3030');
});