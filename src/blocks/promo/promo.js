import Swiper from "swiper";
import { Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.promo__swiper', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        autoHeight: true,
        navigation: {
            nextEl: '.promo__navigation-btn_next',
            prevEl: '.promo__navigation-btn_prev',
        },
    });

})();
