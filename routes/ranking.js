
/*
 * GET ranking page.
 */

exports.view = function(req, res){
	var accounts = loaded_accounts.accounts.slice(0,loaded_accounts.accounts.length);
	// console.log(accounts);
	accounts.sort(function(a,b) {
		// Sort by experience, in descending order
		return b['experience'] - a['experience'];
	});
	console.log(accounts);
	res.render('ranking', {accounts : accounts});
};