
/*
 * GET a specific location.
 */
// var loaded_locations = require('../public/js/locations.json');

exports.login = function(req, res) {
	var body = req.body;
	var username = body.username,
		password = body.password;

	console.log(body);
	console.log(username);
	console.log(password);

	var accounts = loaded_accounts.accounts;

	var response = {}

	for(var i = 0; i < accounts.length; i = i + 1) {
		var account = accounts[i];
		var acc_username = account["username"];
		var acc_password = account["password"];
		var acc_id = account["id"];

		if(username === acc_username
			&& password === acc_password) {
			console.log("Found! ID: " + acc_id);
			response = account;
		}
	}

	res.json(response);
}