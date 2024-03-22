const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const rightNav = document.querySelector('.rightNav')
const navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})