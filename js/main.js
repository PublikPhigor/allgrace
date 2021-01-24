//navbar
const mobileNav = document.querySelector('.mobile-navbar');
const openNavBtn = document.querySelector('.burger');
const closeNavBtn = document.querySelector('.close-navbar-btn');
const overlay = document.querySelector('.overlay');

openNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
});

closeNavBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
});

//navbar dropdown
const dropdownBtn = document.querySelector('.navbar-dropmenu');
const submenu = document.querySelector('.navbar-submenu');

dropdownBtn.addEventListener('click', () => {
    submenu.classList.toggle('active');
});

//fixed header 
const mobileHeader = document.querySelector('.mobile-header');
window.onscroll = () => {myFunction()};

const myFunction = () => {
    if ((document.body.scrollTop > 200) || (document.documentElement.scrollTop > 200)) {
        mobileHeader.classList.add('fixed');
    } else {
        mobileHeader.classList.remove('fixed');
    }
};
