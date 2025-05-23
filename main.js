const menu = document.querySelector('.header_navbar');
const menuBtn = document.querySelector('.menu');

const body = document.body;

if(menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    })
}