import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap';

const hamBtn = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobile-menu .menu");
const hamCloseBtn = document.querySelector(".closedHam");
const body = document.body;

// index.html - 點擊漢堡展開menu關閉
function toggleMenu() {
    mobileMenu.classList.toggle('open');
    body.classList.toggle('hidden-y');
};

hamBtn.addEventListener('click', toggleMenu);
hamCloseBtn.addEventListener("click", toggleMenu);