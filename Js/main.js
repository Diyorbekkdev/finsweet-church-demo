const navbar = document.getElementById('navbar');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = "translateY(0)";
  } else {
    navbar.style.transform = "translateY(-80px)";
  }
  prevScrollPos = currentScrollPos;
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000);
}



var i = 0;
var titles = [  "Diyorbek | Home",  "Jo'rabek | About",  "Nodirbek | Blogs",  "Abdulaziz | Sermons", "Behruzbek | Contact"];

function changeTitle() {
  document.title = titles[i];
  i = (i + 1) % titles.length;
  setTimeout(changeTitle, 750); 
}

changeTitle();
