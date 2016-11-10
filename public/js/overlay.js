
var clicked;

$(document).ready(function() {
  initializeLoginOverlay();
});

function initializeLoginOverlay() {
  if(clicked==1){
    $('#overlay').addClass('hidden');
    console.log(clicked);
  }
  console.log(clicked);
  clicked = 1;

  console.log("Inside overlay");
	var login_btn = $('#login');
	var guest_btn = $('#guest');


	login_btn.click(function() {
    clicked = 1;
    console.log(clicked);

    $('#overlay').addClass('hidden');
    $('#loginform').removeClass('hidden');

	});

	guest_btn.click(function() {
    clicked = 1;
    $('#overlay').addClass('hidden');
	});
}
