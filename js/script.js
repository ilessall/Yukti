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

// Humberger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Fungsi untuk menutup navMenu dan mengembalikan hamburger ke keadaan awal
function closeNavMenuOnScroll() {
    if (!navMenu.classList.contains('hidden')) {
        navMenu.classList.add('-translate-y-full');
        navMenu.classList.remove('translate-y-0');
        setTimeout(() => {
            navMenu.classList.add('hidden');
        }, 500); // Menunggu animasi selesai
        hamburger.classList.remove('hamburger-active');
    }
}

// Event listener untuk klik hamburger
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        setTimeout(() => {
            navMenu.classList.remove('-translate-y-full');
            navMenu.classList.add('translate-y-0');
        }, 10);
    } else {
        navMenu.classList.add('-translate-y-full');
        navMenu.classList.remove('translate-y-0');
        setTimeout(() => {
            navMenu.classList.add('hidden');
        }, 500);
    }
});

// Event listener untuk scroll
window.addEventListener('scroll', closeNavMenuOnScroll);




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

