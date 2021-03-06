
/*
 * GET a specific location.
 */
// var loaded_locations = require('../public/js/locations.json');

// TODO: Fix access by id
exports.view_by_id = function(req, res){
  	var location_id = req.params.id;
  	// Get the location with id location_id from loaded_locations
  	// assuming that id is equal to index
  	var locations_to_show = loaded_locations.locations[location_id-1];
  	// Send an object with locations properly labeled, and the location to show properly labeled
  	var data = {locations_to_show : locations_to_show,
  		locations : loaded_locations.locations};
	// res.render('locations', {locations_to_show : locations_to_show});
	res.render('locations', data);
	console.log(data);
};

// TODO: Fix access by id
exports.view_by_idb = function(req, res){
  	var location_id = req.params.id;
  	// Get the location with id location_id from loaded_locations
  	// assuming that id is equal to index
  	var locations_to_show = loaded_locations.locations[location_id-1];
  	// Send an object with locations properly labeled, and the location to show properly labeled
  	var data = {locations_to_show : locations_to_show,
  		locations : loaded_locations.locations};
	// res.render('locations', {locations_to_show : locations_to_show});
	res.render('locationsb', data);
	console.log(data);
};

// TODO: Break apart tags string into an array object so Handlebars can use it.
exports.add = function(req, res) {
	var body = req.body;
	var title = body.title,
		tags = body.tags,
		rating = body.rating,
		description = body.description,
		lat = body.lat,
		lng = body.lng,
		accountID = body.accountid;

	addLocationExperience(accountID);

	var id = loaded_locations.locations.length + 1;

	var tagList = tags.split("/[\s,]+/");

	// console.log("Tag List");
	// console.log(tagList);

	var location = {
		"id": id,
		"name": title,
		"tags": tagList,
		"rating": rating,
		"description": description,
		"lat": lat,
		"lng": lng
	};
	loaded_locations.locations.push(location)
	// console.log(loaded_locations);

  	var locations_to_show = location;
  	var data = {locations_to_show : locations_to_show,
  		locations : loaded_locations.locations,
  		uploaded : true};

	res.render('locations', data);
}

// TODO: Break apart tags string into an array object so Handlebars can use it.
exports.addb = function(req, res) {
	var body = req.body;
	var title = body.title,
		tags = body.tags,
		rating = body.rating,
		description = body.description,
		lat = body.lat,
		lng = body.lng,
		accountID = body.accountid;

	addLocationExperience(accountID);

	var id = loaded_locations.locations.length + 1;

	var tagList = tags.split(/[\s,]+/);

	// console.log("Tag List");
	// console.log(tagList);

	var location = {
		"id": id,
		"name": title,
		"tags": tagList,
		"rating": rating,
		"description": description,
		"lat": lat,
		"lng": lng
	};
	loaded_locations.locations.push(location)
	// console.log(loaded_locations);

  	var locations_to_show = location;
  	var data = {locations_to_show : locations_to_show,
  		locations : loaded_locations.locations,
  		uploaded : true};

	res.render('locationsb', data);
}

function addLocationExperience(accountID) {
	if(typeof accountID == "undefined")
		return 0;

	var accounts = loaded_accounts.accounts;
	for(var i = 0; i < accounts.length; i++) {
		var account = accounts[i];
		if(account["id"] == accountID) {
			account["experience"] += 100;
		}
	}
}

// TODO: Implement this.
exports.view_by_name = function(req, res) {
	var location_name = req.params.name;
	// Get the location with name location_name from loaded_locations
	res.render('locations', loaded_locations);
	console.log(loaded_locations);
}

// Send a single JSON object containing all locations
exports.all = function(req, res) {
	console.log(loaded_locations.locations);
	res.json(loaded_locations.locations);
}