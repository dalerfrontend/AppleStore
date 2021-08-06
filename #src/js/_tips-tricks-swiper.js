const slider = new Swiper('.tips-tricks__swiper-container', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.tips-tricks__swiper-pagination',
  },

  navigation: {
    nextEl: '.tips-tricks__button-next',
    prevEl: '.tips-tricks__button-prev',
  },

  scrollbar: {
    el: '.tips-tricks__swiper-scrollbar',
  },

  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 3
    },
  }
})
