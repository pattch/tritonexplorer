
/*
 * GET about page.
 */

exports.view = function(req, res){
  	var account_id = req.params.id;
  	if(typeof account_id == "undefined") {
  		res.render('about', {});
  	} else {
		var loaded_account;
		for(var i = 0; i < loaded_accounts.accounts.length; i = i + 1) {
			var account = loaded_accounts.accounts[i];
			if(account_id == account["id"])
				loaded_account = account;
		}

  		res.render('about', {account: loaded_account});
  	}
};