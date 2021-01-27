//navbar
const mobileNav = document.querySelector('.mobile-navbar');
const openNavBtn = document.querySelector('.burger');
const closeNavBtn = document.querySelector('.close-navbar-btn');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('header');
const scrollBtn = document.querySelector('#scroll-to-top');

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
const slider = document.querySelector('.slide-container');
const current = document.querySelector('.current');
const navbarList = document.querySelectorAll('.navbar-list a');
const dropDownList = document.querySelectorAll('.drop-menu a');

const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entires, slideObserver) => {
    entires.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('active');
            current.classList.add('active');
            navbarList.forEach(listItem => {
                listItem.classList.add('active');
            });
            dropDownList.forEach(dropDownList => {
                dropDownList.classList.add('active');
            });
            scrollBtn.classList.add('active');
        } else {
            header.classList.remove('active');
            current.classList.remove('active');
            navbarList.forEach(listItem => {
                listItem.classList.remove('active');
            });
            dropDownList.forEach(dropDownList => {
                dropDownList.classList.remove('active');
            });
            scrollBtn.classList.remove('active');
        }
    });
}, slideObserverOptions);

slideObserver.observe(slider);