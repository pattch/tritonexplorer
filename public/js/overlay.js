var clicked = 0;
$(document).ready(function() {
  initializeLoginOverlay();
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function initializeLoginOverlay() {
  clicked = getCookie("clicked");
  account = getCookie("accountID");

  if(clicked==1 || accountID != -1){
    $('#overlay').addClass('hidden');
    console.log(clicked);
  }
  console.log(clicked);

  console.log("Inside overlay");
	var login_btn = $('#login');
	var guest_btn = $('#guest');


	login_btn.click(function() {
    clicked = 1;
    console.log(clicked);

    $('#overlay').addClass('hidden');
    $('#loginform').removeClass('hidden');
    document.cookie = "clicked=1; max-age=" + cookie_time + "; path=/";
	});

	guest_btn.click(function() {
    clicked = 1;
    $('#overlay').addClass('hidden');
    var cookie_time = 60 * 60 * 30; // 30 minutes
    document.cookie = "clicked=1; max-age=" + cookie_time + "; path=/";
	});
}
