'use strict';

var accountID = -1;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    accountID = getAccountID();
	initializeLogin();
	initializeLikeButtons();
	initializeAboutPageNavigation();
    initializeRegistration();
    initializeChangePassword();
    redirectForAccount();
    fadeNavMessages();
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
        var accountID = data["id"];
        if(typeof accountID == "undefined") {

        } else {
            document.cookie = "accountID=" + data["id"] + ";max-age=31536000;path=/";
            location.reload();
        }
    });
}

function initializeRegistration() {
    var register_btn = $('#loginform .register.button');

    register_btn.click(function() {
        // action="/accounts/register/" method="post"
        var username = $('#loginform .registration .username').val();
        var password = $('#loginform .registration .password').val();
        var name = $('#loginform .registration .name').val();
        var email = $('#loginform .registration .email').val();
        var college = $('#loginform .registration .college').val();

        registerNewUser(username,password,name,email,college);
    });
}

function registerNewUser(username,password,name,email,college) {
    var registrationURL = "/accounts/register/";
    var account = {
        username: username,
        password: password,
        name: name,
        email: email,
        college: college
    };
    console.log(account);
    $.post(registrationURL, account)
    .done(function( data ) {
        // console.log(data);
        // console.log(data["id"]);
        // Create a cookie with the account id here.
        // console.log(data[id]);
        document.cookie = "accountID=" + data["id"] + ";max-age=31536000;path=/";
        location.reload();
    });
}

function changePassword(accountid,oldpassword,newpassword,confirmpassword) {
    var changePasswordURL = "/accounts/password/";
    var response_msg = $('#changePasswordForm .response-msg');

    var changepassword = {
        accountid: accountid,
        oldpassword: oldpassword,
        newpassword: newpassword,
        confirmpassword: confirmpassword
    };

    console.log(changepassword);
    $.post(changePasswordURL, changepassword)
    .done(function( data ) {
        // console.log(data);
        // console.log(data["set"]);
        var success = data["set"];
        var msg = data["msg"];
        if(success) {
            response_msg.addClass("success");
            response_msg.removeClass("failure");
        }
        else {
            response_msg.addClass("failure");
            response_msg.removeClass("success");
        }
        response_msg.text(msg);
    });
}

function initializeChangePassword() {
    var change_btn = $('#changePasswordForm .change.button');

    change_btn.click(function() {
        var oldpassword = $('#changePasswordForm .old.password').val();
        var newpassword = $('#changePasswordForm .new.password').val();
        var confirmpassword = $('#changePasswordForm .confirm.password').val();

        // TODO: Filter password changes here
        accountID = getAccountID();
        var goodId = (typeof accountID != "undefined" && accountID != -1);
        var goodOldPass = (typeof oldpassword != "undefined" && oldpassword.length != 0);
        var goodNewPass = (typeof newpassword != "undefined" && newpassword.length != 0);
        var goodConfPass = (typeof confirmpassword != "undefined" && confirmpassword.length != 0);
        var goodMatching = (goodNewPass && goodConfPass && newpassword == confirmpassword);

        var response_msg = $('#changePasswordForm .response-msg');
        if(!goodOldPass && !goodMatching) {
            response_msg.text("Please enter your current password and a new password.");
            response_msg.removeClass("success");
            response_msg.addClass("failure");
        } else if(!goodMatching) {
            response_msg.text("Passwords do not match.");
            response_msg.removeClass("success");
            response_msg.addClass("failure");
        } else if(goodId) {
            changePassword(accountID,oldpassword,newpassword,confirmpassword);
        }
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
	mng_friends.click(function() {
		$('#manageFriendForm').removeClass('hidden');
	})
}

function anyClicked(form_and_btns, e) {
	var nav = form_and_btns.nav;
    console.log(nav);
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

function redirectForAccount() {
    var account_id = getCookie("accountID");
    var no_account = $('#no-account').length;

    if(typeof account_id != "undefined" && no_account == 1 && account_id !== -1) {
        // alert("Redirecting!");
        window.location.href = account_id;
    }
}

function fadeNavMessages() {
    var messages = $('.content .fading.message');

    messages.each(function() {
        messages.delay(10000).fadeOut(1000);
    });
}

function hideNav(nav_btns) {
    for(var i = 0; i < nav_btns.length; i = i + 1) {
        var nav_and_btns = nav_btns[i];
        var nav = nav_and_btns.nav;
        nav.addClass('hidden');
    }
}

$(document).click(function(event) {
    var target = $(event.target);
    // console.log(target);
    var login_btns = {
        nav : $('#loginform'),
        buttons : [$('.header .nav-left.login'), $('#overlay .login.button')],
        closing : [$('#loginform .cancel.button')]
    }
    var register_btns = {
        nav : $('#registerform'),
        buttons : [$('.header .nav-left.register')],
        closing : []
    }
    var friends_btns = {
        nav : $('#manageFriendForm'),
        buttons : [$('#manage-friends')],
        closing : []
    }
    var info_btns = {
        nav : $('.content .info.container'),
        buttons : [$('.content .info.floating-button')],
        closing : []
    }
    var upload_btns = {
        nav : $('.content .upload.container'),
        buttons : [$('.content .upload.floating-button')],
        closing : [$('.content .upload.container .button.button-red')]
    }
    var message_btns = {
        nav : $('.content .fading.message'),
        buttons : [$(document)],
        closing : []
    }

    var nav_btns = [
        login_btns,
        register_btns,
        friends_btns,
        info_btns,
        upload_btns,
        message_btns
    ];

    hideNav(nav_btns);

    for(var i = 0; i < nav_btns.length; i = i + 1) {
        var nav_and_btns = nav_btns[i];
        var nav = nav_and_btns.nav,
            buttons = nav_and_btns.buttons,
            closing = nav_and_btns.closing;

        // Clicking on the navigation element shouldn't close it.
        if(target.parents().andSelf().is(nav)) {
            nav.removeClass('hidden');
        } 

        // Clicking its buttons again shouldn't close it either.
        for(var j = 0; j < buttons.length; j = j + 1) {
            if(target.parents().andSelf().is(buttons[j]))
                nav.removeClass('hidden');
        }

        // Clicking on its closing elements, however, should
        for(var j = 0; j < closing.length; j = j + 1) {
            if(target.parents().andSelf().is(closing[j]))
                nav.addClass('hidden');
        }
    }
})
