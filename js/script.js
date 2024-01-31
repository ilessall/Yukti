// Header
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
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true, // Menambahkan opsi loop di sini
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // ketika layar lebar >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // ketika layar lebar >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

var swiperAutoPlay = new Swiper('.mySwiperAutoPlay', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true, 
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, 
  },
  breakpoints: {
    // ketika layar lebar >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // ketika layar lebar >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

