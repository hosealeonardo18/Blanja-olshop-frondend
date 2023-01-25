// carousel trend
const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 180,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    520: {
      slidesPerView: 2,
      spaceBetween: 450,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 300,
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 300,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 65,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 380,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 200,
    },

  }
});


// categories
// const swiperCategories = new Swiper(".slide-content-categories", {
//   slidesPerView: 1,
//   centeredSlides: false,
//   slidesPerGroupSkip: 1,
//   grabCursor: true,
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     769: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next-c",
//     prevEl: ".swiper-button-prev-c",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

