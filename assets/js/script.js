// carousel trend
const swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 380,
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
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },

    881: {
      slidesPerView: 2,
      spaceBetween: 25
    },

    950: {
      slidesPerView: 2,
      spaceBetween: 10

    },

    991: {
      slidesPerView: 3,
      spaceBetween: 380

    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 150

    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 380,
    },

  }
});


// categories
const categories = new Swiper(".slideCategories", {
  slidesPerView: 6,
  spaceBetween: 5,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10

    },
    520: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    881: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 120,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 12,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
    },

    1400: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// increment & decrement qty
// const mines = document.querySelector('.decrement');
// const plus = document.querySelector('.increment');
// const qty = document.querySelector('.qty');

// let num = 1;

// plus.addEventListener("click", () => {
//   num++;
//   console.log(num);
//   qty.innerHTML = num
// });

// mines.addEventListener("click", () => {
//   if (num > 1) num--;
//   qty.innerHTML = num
// });


