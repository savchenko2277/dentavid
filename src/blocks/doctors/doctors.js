import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.doctors__swiper', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: '.doctors__navigation-btn_next',
            prevEl: '.doctors__navigation-btn_prev',
        },
        pagination: {
            el: '.doctors__pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            960: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 32
            }
        }
    });

})();
