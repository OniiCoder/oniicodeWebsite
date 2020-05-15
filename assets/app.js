window.onload = function firstThing() {
	//sections
	var home = document.getElementById("home");
	var about = document.getElementById("about");
	var portfolio = document.getElementById("portfolio");

	about.classList.add("hide");
	portfolio.classList.add("hide");
};

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var header2 = document.getElementById("myHeader2");
var sticky = header.offsetTop;
var sticky2 = header.offsetTop;

function myFunction() {

  if (window.pageYOffset > sticky || window.pageYOffset > sticky2) {
    header.classList.add("sticky");
    header2.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header2.classList.remove("sticky");
  }
}

var currentSelection = "home";

var getToKnowMe = document.getElementById("getToKnowMe");
getToKnowMe.addEventListener("click", function() {
	changePage("about");
});

var logo = document.getElementById("logoImage");
logo.addEventListener("click", function() {
	changePage("home");
});

var logo2 = document.getElementById("logoImage2");
logo2.addEventListener("click", function() {
	changePage("home");
});

var exploreBtn = document.getElementById("exploreBtn");
exploreBtn.addEventListener("click", function () {
	changePage("portfolio");
});

function changePage(route) {
	if (route == "home") {
		home.classList.remove("hide");
		about.classList.add("hide");
		portfolio.classList.add("hide");
	} else if (route == "about") {
		home.classList.add("hide");
		about.classList.remove("hide");
		portfolio.classList.add("hide");
	} else if(route == "portfolio") {
		home.classList.add("hide");
		about.classList.add("hide");
		portfolio.classList.remove("hide");
	}
}





