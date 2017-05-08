let express = require('express');
let app = express();
let isDev = process.argv[2] && process.argv[2] === 'dev';
let port = isDev ? 5000 : (process.env.PORT || 5000);

let ejs = require('ejs');
ejs.delimiter = '$';

let environment = isDev ? 'dev' : 'production';

var api = require('./api')
app.use('/api', api)

app.use('/node_modules', express.static('./node_modules'));
app.use('/js', express.static('./js'));
app.use('/bundle.js', express.static('./bundle.js'));

app.set('view engine', 'ejs');

let config = {
	title: 'React' ,
	environment : environment
};

app.get('*', function (req, res) {
	console.log('SERVING INDEX');
  res.render('index', config);
});

app.use(express.static('.'));

app.listen(port, function () {
	console.log('listening on:', port);
});