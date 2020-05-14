window.onload = function firstThing() {
	//sections
	var home = document.getElementById("home");
	var about = document.getElementById("about");
	about.classList.add("hide");
};

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var currentSelection = "home";

var getToKnowMe = document.getElementById("getToKnowMe");
getToKnowMe.addEventListener("click", function() {
	goToAbout("about");
});

var logo = document.getElementById("logoImage");
logo.addEventListener("click", function() {
	goToAbout("home");
});

function goToAbout(route) {
	if (route == "home") {
		home.classList.remove("hide");
		about.classList.add("hide");
	} else if (route == "about") {
		home.classList.add("hide");
		about.classList.remove("hide");
	}
}





