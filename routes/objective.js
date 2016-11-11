
/*
 * GET objective page.
 */

var loaded_missions = require('../public/js/missions.json');

exports.view = function(req, res){
  	var account_id = req.params.id;
  	if(typeof account_id == "undefined") {
  		res.render('objective', {});
  	} else {
		// var acount = loaded_accouts.accounts;
		// for account in loaded_accouts.accounts
		var loaded_account;
		for(var i = 0; i < loaded_accounts.accounts.length; i = i + 1) {
			var account = loaded_accounts.accounts[i];
			if(account_id == account["id"])
				loaded_account = account;
		}

		var missions = loaded_account["missions"];
		var rendered_missions = [];

		for(var i = 0; i < missions.length; i = i + 1) {
			// get the missions 
			for(var j = 0; j < loaded_locations.locations.length; j = j + 1) {
				var mission = loaded_locations.locations[j],
					mission_id = missions[i];
				// console.log(mission);
				if(mission["id"] == mission_id) {
					console.log(mission);
					rendered_missions.push(mission);
				}
			}
		}
		console.log(rendered_missions);
		res.render('objective', {missions: rendered_missions});
  	}
};