var clicked = 0;
$(document).ready(function() {
  initializeLoginOverlay();
  logOut();
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function initializeLoginOverlay() {
  clicked = getCookie("clicked");
  account = getCookie("accountID");

  if(clicked==1 || (typeof account != "undefined" && account != -1)){
    $('#overlay').fadeOut(500);
    $('#overlay').addClass('hidden');
    $('.nav-left.login').removeClass('hidden');
    console.log(account);
  }

	var login_btn = $('#login');
	var guest_btn = $('#guest');

	login_btn.click(function() {
    clicked = 1;
    console.log(clicked);

    $('#overlay').fadeOut(500);
    setTimeout(function(){ $('#overlay').addClass('hidden'); }, 500);
    $('.nav-left.login').removeClass('hidden');
    $('#loginform').removeClass('hidden');
	});

	guest_btn.click(function() {
    clicked = 1;
    $('#overlay').fadeOut(500);
    setTimeout(function(){ $('#overlay').addClass('hidden'); }, 500);
    $('.nav-left.login').removeClass('hidden');
    var cookie_time = 60 * 60 * 30; // 30 minutes
    document.cookie = "clicked=1; max-age=" + cookie_time + "; path=/";
	});
}

function logOut(){
  clicked = getCookie("clicked");
  var logout_btn = $('#logout');
  // alert("Logging out");

  logout_btn.click(function() {
    clicked = 0;
    $('#overlay').removeClass('hidden');
    document.cookie = "clicked=0; max-age=-1; path=/";
    document.cookie = "accountID=-1; max-age=-1; path=/";
    // alert("Redirecting");
    window.location.href = "/";
	});
}
