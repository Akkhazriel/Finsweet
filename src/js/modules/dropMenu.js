const selectMenu = document.querySelector('.contact-form__select');
const menuContains = document.querySelectorAll('.contact-form-select-body__item');
const menuValue = document.querySelector('.contact-form__current-value');

if(selectMenu) {
   const menuToggle = selectMenu.addEventListener('click', () => {
        selectMenu.querySelector('.contact-form-select__body').classList.toggle('active');
        menuValue.classList.toggle('active');
        selectMenu.classList.toggle('active');
   });
}

export default menuToggle;

const menutoggleAddValue = menuContains.forEach(item => {
    item.addEventListener('click', () => {
        menuValue.textContent = item.textContent;
    })
})