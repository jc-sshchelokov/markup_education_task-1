import Swiper, { Navigation, Pagination,  EffectFade} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: false,
  // spaceBetween: 20,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

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
