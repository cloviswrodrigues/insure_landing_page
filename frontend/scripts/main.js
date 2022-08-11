const menuToggle = document.querySelector('.header__menu-toggle');
const menuHamburger= document.querySelector('.header__menu-hamburguer');
const menuClose= document.querySelector('.header__menu-close');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

function ToggleMenuMobile(e) {
    menuHamburger.classList.toggle('disabled');
    menuClose.classList.toggle('disabled');
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
}

function closeMenuMobile(){
    menuHamburger.classList.remove('disabled');
    menuClose.classList.add('disabled');
    menu.classList.remove('active');
    body.classList.remove('overflow-hidden');
}

menuToggle.addEventListener('click', ToggleMenuMobile)

const breakMobile = 800;

var resize = new ResizeObserver( entries => {
    for (let entry of entries) {
      const cr = entry.contentRect;

      if (cr.width > breakMobile) {
        closeMenuMobile()
        break;
      }
    }
});  

resize.observe(body);