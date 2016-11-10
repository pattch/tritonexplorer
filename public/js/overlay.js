$(document).ready(function() {
  console.log("wtf");
  initializeLoginOverlay();
});

var count = 0;
function initializeLoginOverlay() {
  console.log("Inside overlay");
	var login_btn = $('#login');
	var guest_btn = $('#guest');

    if(count != 0) {
        $('#overlay').addClass('hidden');
    }

	login_btn.click(function() {
    $('#overlay').addClass('hidden');
    $('#loginform').removeClass('hidden');

	});

	guest_btn.click(function() {
    $('#overlay').addClass('hidden');
	});

}
