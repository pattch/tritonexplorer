
/*
 * GET home page.
 */
// var loaded_locations = require('../public/js/locations.json');

exports.view = function(req, res) {
  res.render('index', loaded_locations);
  console.log(loaded_locations);
};

exports.viewb = function(req, res) {
	res.render('indexb', loaded_locations);
	console.log(loaded_locations);
}