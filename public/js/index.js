'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('.content .upload.floating-button').on('click', function(e) {
		$('.content .upload.container').toggleClass('hidden');
		console.log("Upload Clicked");
		e.preventDefault();
	});
}