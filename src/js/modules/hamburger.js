const hamburger = function() {
    const menu = document.querySelector('.menu'),
          menuList = document.querySelector('.menu__list'),
          menuItem = document.querySelectorAll('.menu__item'),
          hamburgerBtn = document.querySelector('.hamburger'),
          close = document.querySelector('.menu__list .close');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        menuList.classList.toggle('menu__list_active');
        document.body.style.overflow = 'hidden';
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            menuList.classList.toggle('menu__list_active');
            document.body.style.overflow = 'scroll';
        })
    });

    close.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        menuList.classList.toggle('menu__list_active');
        document.body.style.overflow = 'scroll';
    })
}
export default hamburger;