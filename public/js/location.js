'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializeLocationPage();
})

/*
 * Function that is called when the document is ready.
 */
function initializeLocationPage() {
	// TODO: Add close info button here and in view
	$('.content .info.floating-button, .content .info.container .button-red').on('click', function(e) {
		$('.content .info.container').toggleClass('hidden');
		console.log("Info Clicked");
		e.preventDefault();
	});
}