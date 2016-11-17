
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

	var logged_in_account = {};

	for(var i = 0; i < accounts.length; i = i + 1) {
		var account = accounts[i];
		var acc_username = account["username"];
		var acc_password = account["password"];
		var acc_id = account["id"];

		if(username === acc_username
			&& password === acc_password) {
			console.log("Found! ID: " + acc_id);
			logged_in_account = account;
			response = account;
		}
	}

	var lastlogin = new Date(logged_in_account["lastlogin"]),
		currentDate = new Date(),
		date = new Date();

	if(lastlogin.setHours(0,0,0,0) != currentDate.setHours(0,0,0,0)) {
		logged_in_account["experience"] = logged_in_account["experience"] + 50;
	}

	logged_in_account["lastlogin"] = date.toString();

	res.json(response);
}

exports.register = function(req, res) {
	var body = req.body;
	var username = body.username,
		password = body.password,
		name = body.name,
		email = body.email,
		college = body.college,
		lastlogin = new Date();

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
		"email": email,
		"experience": 0,
		"lastlogin": lastlogin
	};

	console.log(account);

	loaded_accounts.accounts.push(account);

	res.json(account);
}