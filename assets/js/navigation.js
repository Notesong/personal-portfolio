const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', (event) => {
  menu.classList.toggle('menu--open');
  if(menu.classList.contains('menu--open')) {
    TweenLite.to(".menu", 1, {right:'0', ease:Power2.easeInOut});
  } else {
    TweenLite.to(".menu", 1, {right:'-300', ease:Power2.easeInOut});
  }
  event.stopPropagation();
});

const menuBodyToggle = document.querySelector('body');

menuBodyToggle.addEventListener('click', () => {
  if(menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    TweenLite.to(".menu", 1, {right:'-300', ease:Power2.easeInOut});
  }
});

const nav = document.querySelector('.header-bar');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
          nav.classList.add('nav-colored');
          nav.classList.remove('nav-transparent');
      } else {
          nav.classList.add('nav-transparent');
          nav.classList.remove('nav-colored');
  }
});