'use strict';

var accountID = -1;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    accountID = getAccountID();
	initializeLogin();
	initializeLikeButtons();
	initializeAboutPageNavigation();
});

function getAccountID() {
    var id = getCookie("accountID");
    if(typeof id != "undefined" && id != null)
        return id;
    return -1;
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function initializeLogin() {
    initializeLoginDialogs();
    initializeLoginAuthentication();
}

function initializeLoginDialogs() {
	var login_dialog_btn = $('.header .nav-left.login');
	var register_dialog_btn = $('.header .nav-left.register');
    var cancel_btn = $('#loginform .cancel.button');

    if(accountID != -1) {
        login_dialog_btn.addClass('hidden');
        register_dialog_btn.addClass('hidden');
    }

	login_dialog_btn.click(function() {
		console.log("showing login form");
		$('#loginform').removeClass('hidden');
		$('#registerform').addClass('hidden');
	});

	register_dialog_btn.click(function() {
		$('#loginform').addClass('hidden');
		$('#registerform').removeClass('hidden');
	});

    cancel_btn.click(function() {
        console.log("Closing forms.");
        $('#loginform').addClass('hidden');
        $('#registerform').addClass('hidden');
    });
}

function initializeLoginAuthentication() {
    var login_btn = $('#loginform .login.button');

    login_btn.click(function() {
        var username = $('#loginform #username').val();
        var password = $('#loginform #password').val();

        authenticateByUsername(username,password);
    });
}

function authenticateByUsername(username,password) {
    var accountsURL = "/accounts/";
    $.post( accountsURL, { username: username, password: password })
    .done(function( data ) {
        console.log(data);
        console.log(data["id"]);
        // Create a cookie with the account id here.
        // console.log(data[id]);
        document.cookie = "accountID=" + data["id"] + ";max-age=31536000;path=/";
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

function initializeAboutPageNavigation() {
	var mng_friends = $('#manage-friends');
	console.log(mng_friends);
	mng_friends.click(function() {
		console.log('Opening Manage Friends Form');
		$('#manageFriendForm').removeClass('hidden');
	})
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
    var friends_btns = {
    	nav : $('#manageFriendForm'),
    	buttons : [$('#manage-friends')]
    }

    var nav_btns = [
    	login_btns,
    	register_btns,
    	friends_btns
    ];

    for(var i = 0; i < nav_btns.length; i = i + 1) {
    	var nav_and_btns = nav_btns[i];
    	if(!anyClicked(nav_and_btns, e))
    		nav_and_btns.nav.addClass('hidden');
    }
});
