
/*
 * GET objective page.
 */

var loaded_missions = require('../public/js/missions.json');

exports.view = function(req, res){
	res.render('objective', loaded_missions);
};