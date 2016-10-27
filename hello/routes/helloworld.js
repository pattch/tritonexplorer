
/*
 * GET home page without a username.
 */

exports.view = function(req, res){
  console.log("name is " + 'World');
  res.render('index', {
  	'name': 'World',
  });
};