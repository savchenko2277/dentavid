import Swiper from "swiper";
import { Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.promo__swiper', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: '.promo__navigation-btn_next',
            prevEl: '.promo__navigation-btn_prev',
        },
    });

})();
