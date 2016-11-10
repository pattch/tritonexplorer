$(document).ready(initializeMissionButtons);

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