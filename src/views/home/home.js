import a from './a';
import './home.less';



var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    //设置自动播放间隔时间
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    on: {
        slideChange: function () {
            var realIndex = this.realIndex; //真实索引值
        },
    },
});
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
