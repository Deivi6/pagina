// Carrusel de Sativa
var swiperSativa = new Swiper("#swiper1", {
  slidesPerView: 1, // en móvil
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper1 .swiper-button-next",
    prevEl: "#swiper1 .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },  // en tablet
    1024: { slidesPerView: 3 }  // en PC
  }
});

// Carrusel de Indica
var swiperIndica = new Swiper("#swiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper2 .swiper-button-next",
    prevEl: "#swiper2 .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Carrusel de Hibrida
var swiperHibrida = new Swiper("#swiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper3 .swiper-button-next",
    prevEl: "#swiper3 .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
// Swiper del header
var swiper1 = new Swiper(".mySwiper-1", {
  loop: true,
  navigation: {
    nextEl: ".mySwiper-1 .swiper-button-next",
    prevEl: ".mySwiper-1 .swiper-button-prev",
  },
  pagination: {
    el: ".mySwiper-1 .swiper-pagination",
    clickable: true,
  },
});

// Swipers de productos (uno por tab)
var swiperSativa = new Swiper("#swiper1", {
  loop: true,
  navigation: {
    nextEl: "#swiper1 .swiper-button-next",
    prevEl: "#swiper1 .swiper-button-prev",
  },
});

var swiperIndica = new Swiper("#swiper2", {
  loop: true,
  navigation: {
    nextEl: "#swiper2 .swiper-button-next",
    prevEl: "#swiper2 .swiper-button-prev",
  },
});

var swiperHibrida = new Swiper("#swiper3", {
  loop: true,
  navigation: {
    nextEl: "#swiper3 .swiper-button-next",
    prevEl: "#swiper3 .swiper-button-prev",
  },
});
