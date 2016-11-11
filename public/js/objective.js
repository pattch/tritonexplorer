$(document).ready(function() {
	initializeMissionButtons();
	redirectForAccount();
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function initializeMissionButtons() {
	var missions = $('.mission');
	// console.log(accept_buttons);
	missions.each(function(index) {
		//console.log($(this));
		var accept = $(this).find('.accept');
		var decline = $(this).find('.decline');
		var ongoing = $(this).find('.ongoing');
        var content = $(this).find('.mission-content');

		accept.click(function() {
			accept.hide();
			decline.hide();
			ongoing.fadeIn(200);
		});

		decline.click(function() {
			accept.hide();
			decline.hide();
            content.fadeOut(200);
		});
	});
    
    $('#daily-button').click(function(){
        $('#mysterious-mission').hide();
        $('#daily-mission').show();
        $(this).preventDefault();
    });
    $('#mysterious-button').click(function(){
        $('#mysterious-mission').show();
        $('#daily-mission').hide();
        $(this).preventDefault();
    });
}

function redirectForAccount() {
	var account_id = getCookie("accountID");
	var no_missions = $('#no-missions').length;

	if(typeof account_id != "undefined" && no_missions == 1 && account_id !== -1) {
		alert("Redirecting!");
		window.location.href = account_id;
	}
}