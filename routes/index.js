
/*
 * GET home page.
 */
var locations = require('../public/js/locations.json');

exports.view = function(req, res){
  res.render('index', locations);
  console.log(locations);
};

exports.location = function(req, res) {
	var body = req.body;
	var title = body.title,
		tags = body.tags,
		rating = body.rating,
		description = body.description;

	var id = locations.length + 1;

	var location = {
		"id": id,
		"name": title,
		"tags": tags,
		"rating": rating,
		"description": description
	};
	locations.locations.push(location)
	console.log(locations);

	res.render('index', locations);
}