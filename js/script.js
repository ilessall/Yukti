window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
 if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed' );
  }
};

// Humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// Slider

let currentSlide = 0;
const slides = document.querySelectorAll('.h-96 > div');

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[n].style.display = 'block';
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);

