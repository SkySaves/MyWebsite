let navbar = document.querySelector("div.nav-bar");
let dropDown = document.querySelector("div#drop-down");

// Controls the mobile navbar dropdown
dropDown.addEventListener("click", function(event) {
  let navbarStyles = document.defaultView.getComputedStyle(navbar);

  if (navbarStyles.display === "none") {
    navbar.style.display = "block";
  }
  else {
    navbar.style.display = "none";
  }

});

// Controls the responsiveness of the navbar when page resizes
window.addEventListener("resize", function(event) {
  var newWidth = window.innerWidth;
  if (newWidth > 530) {
    navbar.style.display = "flex";
  }
  else {
    navbar.style.display = "none";
  }
});