import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

(() => {

    const articles = document.querySelector('.articles');
    if (!articles) return;

    const swiper = new Swiper(articles.querySelector('.articles__swiper'), {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: articles.querySelector('.articles__navigation-next'),
            prevEl: articles.querySelector('.articles__navigation-prev'),
        },
        pagination: {
            el: articles.querySelector('.articles__pagination'),
            clickable: true,
        },
        breakpoints: {
            960: {
                slidesPerView: 2
            }
        }
    });

})();
