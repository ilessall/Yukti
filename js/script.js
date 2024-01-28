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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});


// let sliderContainer = document.getElementById('sliderContainer');
// let slider = document.getElementById('slider');
// let cards = slider.getElementsByTagName('li');

// let elementsToShow = 3;
// if(document.body.clientWidth<1000){
//     elementsToShow = 1;
// }else if(document.body.clientWidth<1500){
//     elementsToShow = 2;
// }

// let sliderContainerWidth = sliderContainer.clientWidth;

// let cardWidth = sliderContainerWidth/elementsToShow;

// slider.style.width = cards.length*cardWidth+'px';
// slider.style.transition='margin';
// slider.style.transitionDuration='1s';


// for (let index = 0; index < cards.length; index++) {
//   const element = cards [index];
//   element.style.width = cardWidth+'px';
// }

// function prev(){
//   if (+slider.style.marginLeft.slice (0, -2) != 0)
//   slider.style.marginLeft = ((+slider.style.marginLeft.slice (0, -2))+cardWidth)+'px';
// }

// function next(){
//   if (+slider.style.marginLeft.slice(0, -2) !=-cardWidth*(cards.length-elementsToShow))
//   slider.style.marginLeft = ((+slider.style.marginLeft.slice (0, -2))-cardWidth)+'px'; 
// } 


// Dropdown
// function toggleDropdown(containerId, dropdownId, iconId, textBelowId) {
//   var toggleContainer = document.getElementById(containerId);
//   var dropdown = document.getElementById(dropdownId);
//   var textBelow = document.getElementById(textBelowId);
//   var isToggled = false;

//   toggleContainer.addEventListener('click', function() {
//     closeAllDropdowns();

//     isToggled = !isToggled;

//     if (isToggled) {
//       document.getElementById(iconId).innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />';
//       document.getElementById(iconId).setAttribute('stroke', '#4299e1');
//       dropdown.classList.remove('hidden');
//       textBelow.innerText = 'Sembunyikan';
//       textBelow.style.color = '#4299e1';
//     } else {
//       document.getElementById(iconId).innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />';
//       document.getElementById(iconId).setAttribute('stroke', 'currentColor');
//       dropdown.classList.add('hidden');
//       textBelow.innerText = 'Lihat Semua';
//       textBelow.style.color = '#2d3748';
//     }
//   });
// }

// function closeAllDropdowns() {
//   // Close all dropdowns
//   var allDropdowns = document.querySelectorAll('.dropdown-container .hidden');
//   allDropdowns.forEach(function(dropdown) {
//     dropdown.classList.add('hidden');
//   });
// }

// // Initialize toggle for each button
// toggleDropdown('toggleContainer1', 'dropdown1', 'myIcon1', 'textBelow1');
// toggleDropdown('toggleContainer2', 'dropdown2', 'myIcon2', 'textBelow2');
