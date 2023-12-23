const swiper = new Swiper(".wrapper-slider", {
  watchOverflow: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: "auto",
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 4,
    },
  },
});

var slid1 = document.querySelectorAll(".swiper-slide_none-1");
var slid2 = document.querySelectorAll(".swiper-slide_none-2");
var buttonElement = document.querySelector(".wrapper__button");
var pageWidth = document.documentElement.clientWidth;

// Добавляем класс при необходимости
buttonElement.addEventListener("click", function () {
  if (pageWidth >= 1120) {
    var slid = slid2;
  } else {
    var slid = slid1;
  }

  if (buttonElement.classList.contains("expanded")) {
    buttonElement.classList.remove("expanded");
    buttonElement.innerText = "Показать всё";
    slid.forEach(function (slide) {
      slide.style.display = "none";
    });
  } else {
    buttonElement.classList.add("expanded");
    buttonElement.innerText = "Скрыть";
    slid.forEach(function (slide) {
      slide.style.display = "flex";
    });
  }
});
