let lastScrollY = 0;
let scrollDirection = 'down';
const homeSection = document.getElementById('home');
const nav = document.getElementById('nav');
const floatingHome = document.getElementById('floatingHome');


function checkNavVisibility() {
    const currentScrollY = window.scrollY;
    const homeHeight = homeSection.offsetHeight;

    // show floating home button after scrolling past half of home section
    if (currentScrollY > homeHeight * 0.5) {
        floatingHome.classList.add('show');
    } else {
        floatingHome.classList.remove('show');
    }

    // check when near top
    if (currentScrollY < 100) {
        nav.classList.add('visible');
    } else if (currentScrollY > lastScrollY) { // scrolling down
        nav.classList.remove('visible');
    } else {
        if (currentScrollY > homeHeight) { // only show when scrolled past home section
            nav.classList.add('visible');
        }
    }

    lastScrollY = currentScrollY;
}

checkNavVisibility();

window.addEventListener('scroll', checkNavVisibility);