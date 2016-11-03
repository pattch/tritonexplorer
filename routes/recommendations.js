
/*
 * GET recommendations page.
 */

exports.view = function(req, res){
	var locations = loaded_locations.locations;
	res.render('recommendations', {locations : locations});
};