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



// var i = 0;
// var titles = [  "Diyorbek | Home",  "Jo'rabek | About",  "Nodirbek | Blogs",  "Abdulaziz | Sermons", "Behruzbek | Contact"];

// function changeTitle() {
//   document.title = titles[i];
//   i = (i + 1) % titles.length;
//   setTimeout(changeTitle, 750); // Change title every 2 seconds
// }

// changeTitle();

var titleIcons = {
  "Title 1": "",
  "Title 2": "icon2.png",
  "Title 3": "icon3.png",
  "Title 4": "icon4.png",
  "Title 5": "icon5.png"
};

function setTitleIcon(title) {
  var icon = titleIcons[title];
  if (icon) {
    var link = document.getElementById('page-icon');
    link.href = icon;
  }
}

function changeTitle() {
  var titles = Object.keys(titleIcons);
  var i = Math.floor(Math.random() * titles.length);
  var title = titles[i];
  document.title = title;
  setTitleIcon(title);
  setTimeout(changeTitle, 750); // Change title every 2 seconds
}

changeTitle();
