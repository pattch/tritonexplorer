
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.location = function(req, res) {
	var body = req.body;
	var title = body.title,
		tags = body.tags,
		rating = body.rating,
		description = body.description;
	console.log(body);

	res.render('index');
}