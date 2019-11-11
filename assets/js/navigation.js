// slide the mobile menu in and out
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

// able to click anywhere to close the mobile menu
const menuBodyToggle = document.querySelector('body');

menuBodyToggle.addEventListener('click', () => {
  if(menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    TweenLite.to(".menu", 1, {right:'-300', ease:Power2.easeInOut});
  }
});

// determine if window is at the top of the page and either add or take away a background color to the navbar
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

// click on link in navbar and scroll to appropriate section
const navHome = document.querySelector('.nav-home');
const navPortfolio = document.querySelector('.nav-portfolio');
const navAbout = document.querySelector('.nav-about');

navHome.addEventListener('click', () => {
  TweenLite.to(window, 1, {scrollTo: '#top'});
});
navPortfolio.addEventListener('click', () => {
  TweenLite.to(window, 1, {scrollTo: '#portfolio'});
});
navAbout.addEventListener('click', () => {
  TweenLite.to(window, 1, {scrollTo: '#about'});
});