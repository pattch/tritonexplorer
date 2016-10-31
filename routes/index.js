
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

// Title: <input type="text" name="title" /><br />
// Tags: <input type="text" name="tags" /><br />
// Rating: (1-5) <input type="number" name="rating" min="1" max="5" /><br />
// Description: <input type="text" name="description" /><br />
// <button type="submit" id="add-location" class="button button-green">Submit</button>
// <button type="cancel" class="button button-red">Cancel</button>

exports.location = function(req, res) {
	var body = req.body;
	console.log(body);
}