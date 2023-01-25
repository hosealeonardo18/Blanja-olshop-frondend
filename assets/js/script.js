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


// sbadmin
if ('WebSocket' in window) {
  (function () {
    function refreshCSS() {
      const sheets = [].slice.call(document.getElementsByTagName('link'));
      const head = document.getElementsByTagName('head')[0];
      for (const i = 0; i < sheets.length; ++i) {
        const elem = sheets[i];
        const parent = elem.parentElement || head;
        parent.removeChild(elem);
        const rel = elem.rel;
        if ((elem.href && typeof rel != 'string') || rel.length == 0 || rel.toLowerCase() == 'stylesheet') {
          const url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
          elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + new Date().valueOf();
        }
        parent.appendChild(elem);
      }
    }
    const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    const address = protocol + window.location.host + window.location.pathname + '/ws';
    const socket = new WebSocket(address);
    socket.onmessage = function (msg) {
      if (msg.data == 'reload') window.location.reload();
      else if (msg.data == 'refreshcss') refreshCSS();
    };
    if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
      console.log('Live reload enabled.');
      sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
    }
  })();
} else {
  console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>