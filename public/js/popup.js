'use strict';

function openlogin(){
  document.getElementById('registerform').style.display="none";
  document.getElementById('loginform').style.display="block";
}
function hidelogin(){
  document.getElementById('loginform').style.display="none";
}

function openregister(){
  document.getElementById('loginform').style.display="none";
  document.getElementById('registerform').style.display="block";
}
function hideregister(){
  document.getElementById('registerform').style.display="none";
}
