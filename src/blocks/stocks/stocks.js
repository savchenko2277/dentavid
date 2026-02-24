import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.stocks__swiper', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: '.stocks__navigation-next',
            prevEl: '.stocks__navigation-prev',
        },
        pagination: {
            el: '.stocks__pagination',
            clickable: true,
        },
        breakpoints: {
            960: {
                slidesPerView: 2
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 48
            }
        }
    });

})();
