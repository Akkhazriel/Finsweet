const menuSelect = document.querySelector('.contact-form__select');
const menuBody = document.querySelector('.contact-form-select__body');
let animationClass = 'animation1';

export const dropMenu = menuSelect.addEventListener('click', () => {
    menuBody.classList.toggle('active');
});