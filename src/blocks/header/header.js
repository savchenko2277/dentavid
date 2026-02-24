

(() => {

    const header = document.querySelector('.header');
    if (!header) return;

    const burger = header.querySelector('.header__burger');
    const menu = header.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    const setHeaderMenu = () => {
        if (window.matchMedia('(max-width: 960px)').matches) {
            const headerItemsMenu = header.querySelectorAll('.header__item_menu');

            headerItemsMenu.forEach(item => {
                const head = item.querySelector('.header__item-head');

                head.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });
        }
    }

    setHeaderMenu();

    window.addEventListener('resize', () => {
        setHeaderMenu();
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('is-scroll');
        } else {
            header.classList.remove('is-scroll');
        }
    })

})();
