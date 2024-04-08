$(document).ready(function(){

    //sec-1 swiper
    var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:3500,
        },
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "progressbar",
        // },
    });

    //sec-1 m_swiper
    var swiper = new Swiper(".mySwiper_m", {
        autoplay:{
            delay:3500,
        },
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //sec-2 m_swiper
    var swiper = new Swiper(".mySwiper_m1", {
        slidesPerView : 1,
        slidesPerGroup: 1,
        // spaceBetween: 67, 
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    //sec-3 m_swiper
    var swiper = new Swiper(".mySwiper_m2", {
        slidesPerView : 1,
        slidesPerGroup: 1,
        // spaceBetween: 67, 
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 20
              },
            // 화면의 넓이가 1000px 이상일 때
            120: {
                slidesPerView: 1,
                spaceBetween: 20
              },
        },
    });

   //sec-4 swiper
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView : 4,
        slidesPerGroup: 1,
        spaceBetween: 67, 
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 20
              },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            // 화면의 넓이가 1000px 이상일 때
            120: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        },
        navigation: {
            nextEl: ".swiper-next1",
            prevEl: ".swiper-prev1",
        },
    });

    //sec-6 swiper
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView : 4,
        slidesPerGroup: 1,
        spaceBetween: 67, 
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 20
              },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            120: {
                slidesPerView: 2,
                spaceBetween: 20
              },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },

        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });

    //sec-7 swiper
    var swiper = new Swiper(".mySwiper_m3", {
        slidesPerView : 1,
        slidesPerGroup: 1,
        spaceBetween: 10, 
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-next2",
            prevEl: ".swiper-prev2",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
              },
            800: {
                slidesPerView: 2,
                spaceBetween: 20
              },
            120: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        },
    });
});