
/*
 * GET a specific location.
 */
// var loaded_locations = require('../public/js/locations.json');

exports.login = function(req, res) {
	var body = req.body;
	var username = body.username,
		password = body.password;

	// console.log(body);
	// console.log(username);
	// console.log(password);

	var accounts = loaded_accounts.accounts;

	var response = {};
	response["auth"] = false;
	response["msg"] = "No account with that username found."

	var logged_in_account = {};

	for(var i = 0; i < accounts.length; i = i + 1) {
		var account = accounts[i];
		var acc_username = account["username"];
		var acc_password = account["password"];
		var acc_id = account["id"];

		if(username === acc_username) {
			if(password === acc_password) {
				logged_in_account = account;
				response["account"] = account;
				response["auth"] = true;
				response["msg"] = "Successfully logged in, redirecting...";
			} else {
				response["msg"] = "Incorrect password."
			}
		}
	}

	// Add experience points for logging in here.
	if(response["auth"]) {
		// var lastlogin = new Date(logged_in_account["lastlogin"]),
		// 	currentDate = new Date(),
		// 	date = new Date();

		// if(lastlogin.setHours(0,0,0,0) != currentDate.setHours(0,0,0,0)) {
		// 	logged_in_account["experience"] = logged_in_account["experience"] + 50;
		// }

		// logged_in_account["lastlogin"] = date.toString();
		logged_in_account["experience"] += loginExperience(logged_in_account);
		logged_in_account["lastlogin"] = (new Date()).toString();
	}

	console.log("Login attempt... Response:");
	console.log(response);

	res.json(response);
}

function loginExperience(account) {
	var lastlogin = new Date(account["lastlogin"]),
		currentDate = new Date(),
		date = new Date();

	if(lastlogin.setHours(0,0,0,0) != currentDate.setHours(0,0,0,0)) {
		return 50;
	}

	return 0;
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
    
    var response = {};
	response["auth"] = false;
    
    if(username.length<=4){
        response["msg"] = "User name cannot be empty or shorter than 4 characters!"
        console.log("User name too short");
    }
    else{
        response["auth"]= true;
    }
    
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
    
    if(response["auth"])
    {
        console.log(account);
            
        loaded_accounts.accounts.push(account);
            
        res.json(account);
    }	
}

exports.changepassword = function(req, res) {
	var body = req.body;
	var accountid = body.accountid,
		oldpassword = body.oldpassword,
		newpassword = body.newpassword,
		confirmpassword = body.confirmpassword,
		accounts = loaded_accounts.accounts,
		passwordchanged = false,
		response = {
			"set": false,
			"msg": "Account not found."
		};

	for(var i = 0; i < accounts.length; i = i + 1) {
		var account = accounts[i];
		var acc_id = account["id"];
		var password = account["password"];

		if(accountid == acc_id) {
			// console.log("Found " + accountid);

			if(oldpassword == password
				&& newpassword == confirmpassword 
				&& newpassword.length != 0) {
				account["password"] = newpassword;
				passwordchanged = true;
			} else {
				response = {
					"set": false,
					"msg": "Sorry, incorrect password entered."
				}
			}
			
		}
	}

	if(passwordchanged) {
		response = {
			"set": true,
			"msg": "Password successfully changed."
		}
	}

	res.json(response);
}