const swiper = new Swiper(".wrapper-slider", {
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: "auto",
        },
        768: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
    },
});
