const burger = document.querySelector('.nav-menu');
const menu = document.querySelector('.nav');
const body = document.body;

    const toggleMenu = burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })

export default toggleMenu;