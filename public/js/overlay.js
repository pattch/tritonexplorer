var count = 0;
function initializeLoginOverlay() {
	var login_btn = $('#login .login.start.button');
	var guest_btn = $('#guest .guest.start.button');

    if(count != 0) {

        $('#overlay').addClass('hidden');
    }

	login_btn.click(function() {
    $('#overlay').addClass('hidden');
	});

	guest_btn.click(function() {
    $('#overlay').addClass('hidden');
	});

}
