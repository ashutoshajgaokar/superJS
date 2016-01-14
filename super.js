/*----------------------------SUPER JS-----------------------------------------*/


/*=================================================================================================================================
Browser and Device Detection Scripts
=================================================================================================================================*/

/*----------Condition works in Chrome IOS devices only--------------*/
if(navigator.userAgent.match('CriOS')){
//document.getElementById('box').style.display = "block";
}

/*----------Condition works in Chrome and Opera--------------*/
if(navigator.appVersion.indexOf("Chrome/") != -1){
//document.getElementById('box').style.display = "block";
}

/*----------Combination of above two--------------*/
if (navigator.userAgent.match('CriOS') || (navigator.appVersion.indexOf("Chrome/") != -1)) {
//document.getElementById('box').style.display = "none";
}

/*----------Condition works only in Opera--------------*/
if (navigator.appVersion.indexOf("OPR") > 0) {
//document.getElementById('box').style.display = "block";
}

/*----------Condition works only in Mac Devices--------------*/
if (navigator.appVersion.indexOf("Mac") != -1) {
//document.getElementById('mainSearch').style.paddingLeft = "92px";

}

/*=================================================================================================================================
Get the cursor at END of the keywords in a SEARCH BOX
=================================================================================================================================*/
/*----------------------------------------*/
//add the following attribute to the input box.
//onfocus="this.value = this.value;"


/*=================================================================================================================================
Add a Sticky header on scroll using pure js
=================================================================================================================================*/

var left = document.getElementById("header");
var stop = (39);
window.onscroll = function(e) {
var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
console.log(scrollTop, left.offsetTop);
// left.offsetTop;
if (scrollTop >= stop) {
left.className = 'stick';
document.getElementById('logo').className = 'logo-img hide';
document.getElementById('query').className = 'query logos';
} else {
left.className = '';
}
if (scrollTop == 0) {
left.className = 'ab';
document.getElementById('logo').className = 'logo-img';
document.getElementById('query').className = 'query';
}
}
