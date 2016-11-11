
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

global.loaded_locations = require('./public/js/locations.json');
global.loaded_accounts = require('./public/js/accounts.json');
var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
//var login = require('./routes/login');
var about = require('./routes/about');
var ranking = require('./routes/ranking');
var objective = require('./routes/objective');
var recommendations = require('./routes/recommendations');
var locations = require('./routes/locations');
var accounts = require('./routes/accounts');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
// app.use(express.logger('dev')); // This is commented out to send messages to console for development
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

// Home page
app.get('/', index.view);

// Route for adding a new location
app.post('/', locations.add);
// Route for showing a specific location by id
app.get('/locations/id/:id', locations.view_by_id);
// Route for showing a specific location by name
app.get('/locations/name/:name', locations.view_by_name);
// Route for getting all locations as a JSON object
app.get('/locations/all/', locations.all);

//app.get('/login/', login.view);

// Route for authenticating
app.post('/accounts/', accounts.login);
// Route signing up
app.post('/accounts/register/', accounts.register);

// About Me Page
app.get('/about/', about.view);
app.get('/about/:id', about.view);

// Rankings Page
app.get('/ranking/', ranking.view);

// Objectives / Missions Page
app.get('/objective/', objective.view);
app.get('/objective/:id', objective.view);

// Recommendations Page
app.get('/recommendations/', recommendations.view);


// Start the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
