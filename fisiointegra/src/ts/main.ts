import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiperGalery = new Swiper('.inline_galery', {
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    360: {
      slidesPerView: 2,
    },
  },
});
