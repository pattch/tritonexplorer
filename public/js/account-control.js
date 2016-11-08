'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializeLogin();
	initializeLikeButtons();
})

function initializeLogin() {
	var login_btn = $('.header .nav-left.login');
	var register_btn = $('.header .nav-left.register');

	login_btn.click(function() {
		$('#loginform').removeClass('hidden');
		$('#registerform').addClass('hidden');
	});

	register_btn.click(function() {
		$('#loginform').addClass('hidden');
		$('#registerform').removeClass('hidden');
	});
}

function initializeLikeButtons() {
  var recommendations = $('.recommendation');
  recommendations.each(function(index) {
    // console.log($(this));
    var like = $(this).find('.button.like');
    var dislike = $(this).find('.button.dislike');

    like.click(function() {
      like.toggleClass('highlight');
      dislike.removeClass('highlight');
    });

    dislike.click(function() {
      dislike.toggleClass('highlight');
      like.removeClass('highlight');
    });
  });
}

function anyClicked(form_and_btns, e) {
	var nav = form_and_btns.nav;
	var buttons = form_and_btns.buttons;

	if(nav.is(e.target) 
		|| (nav.has(e.target).length !== 0))
		return true;

	var any_btn_clicked = false;
	for(var i = 0; i < buttons.length; i = i + 1) {
		var btn = buttons[i];
		if(btn.is(e.target) 
			|| (btn.has(e.target).length !== 0))
			return true;
	}

	return false;
}

// Hide dialogs when clicking on the page and not on form
$(document).mouseup(function (e)
{
    var login_btns = {
    	nav : $('#loginform'),
    	buttons : [$('.header .nav-left.login')]
    };
    var register_btns = {
    	nav : $('#registerform'),
    	buttons : [$('.header .nav-left.register')]
    }

    var nav_btns = [
    	login_btns,
    	register_btns
    ];

    for(var i = 0; i < nav_btns.length; i = i + 1) {
    	var nav_and_btns = nav_btns[i];
    	if(!anyClicked(nav_and_btns, e))
    		nav_and_btns.nav.fadeOut(100);
    }
    
    // if (!container1.is(e.target) // if the target of the click isn't the container...
    //     && container1.has(e.target).length === 0) // ... nor a descendant of the container
    // {
    //     container1.fadeOut(100);
    // }
    // else
    // {
    //     if (!container2.is(e.target) // if the target of the click isn't the container...
    //         && container2.has(e.target).length === 0) // ... nor a descendant of the container
    //     {
    //         container2.fadeOut(100);
    //     }
    // }
});