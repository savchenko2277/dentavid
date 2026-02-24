(() => {

    const answers = document.querySelector('.answers');
    if (!answers) return;

    const items = answers.querySelectorAll('.answers__item');

    items.forEach(item => {
        const head = item.querySelector('.answers__item-head');

        head.addEventListener('click', () => {
            item.classList.toggle('active');
        })
    });

})();
