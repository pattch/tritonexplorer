
/*
 * GET home page.
 */
// var loaded_locations = require('../public/js/locations.json');

exports.view = function(req, res){
  res.render('index', loaded_locations);
  console.log(loaded_locations);
};

exports.location = function(req, res) {
	var body = req.body;
	var title = body.title,
		tags = body.tags,
		rating = body.rating,
		description = body.description;

	var id = loaded_locations.locations.length + 1;

	var location = {
		"id": id,
		"name": title,
		"tags": tags,
		"rating": rating,
		"description": description
	};
	loaded_locations.locations.push(location)
	console.log(loaded_locations);

	res.render('index', loaded_locations);
}