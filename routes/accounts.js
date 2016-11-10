
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

	var response = {};

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

exports.register = function(req, res) {
	var body = req.body;
	var username = body.username,
		password = body.password,
		name = body.name,
		email = body.email,
		college = body.college;

	var id = loaded_accounts.accounts.length + 1;

	var account = {
		"id": id,
		"name": name,
		"locations": [],
		"experience": 200,
		"missions": [],
		"college": body.college,
		"img-url": "/images/profile_man.png",
		"username": username,
		"password": password,
		"email": email
	};

	console.log(account);

	loaded_accounts.accounts.push(account);

	res.json(account);
}