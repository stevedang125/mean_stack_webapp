// declare variables:
var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

var appRoutes = require('./routes/appRoutes');
var bodyParser = require('body-parser');

// Get cors to by pass the http security errors
var cors = require('cors');

// Connect to the database:
var mongoose = require('mongoose');
mongoose.connect('mongodb://stevedang125:stevedang125@ds153015.mlab.com:53015/dailygoalsforfun');

console.log('Connected to the database!..');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);
// Provide static directory for frontend
app.use(express.static(__dirname + '/dist')); 

// create a server listener
http.createServer(app).listen(port);
console.log('Hey the magical backend is running on port: '+port);