document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu');

    if (nav && menuToggle) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('change');
            menuToggle.classList.toggle('change');
        });
    }
});