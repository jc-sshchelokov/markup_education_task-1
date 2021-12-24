import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  speed: 700,
  effect: 'cube',

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

export default swiper;
