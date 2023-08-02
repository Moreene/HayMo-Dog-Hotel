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

// topbar 線上預約 active(無法透過currentPage來增加active樣式的部分)
document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.href;
    let loginLink = document.getElementById("loginLink");
    let reverseLink = document.getElementById("reverseLink");


    let signUpHref = "http://localhost:5173/HayMo-Dog-Hotel/pages/signUp.html";
    let reverseCosmeticHref = "http://localhost:5173/HayMo-Dog-Hotel/pages/reverse-cosmetic.html";
    let reverseStayHref = "http://localhost:5173/HayMo-Dog-Hotel/pages/reverse-stay.html";

    switch (currentUrl) {
        case signUpHref:
            loginLink.classList.add("active");
            break;
        case reverseCosmeticHref:
            reverseLink.classList.add("active");
            break;
        case reverseStayHref:
            reverseLink.classList.add("active");
            break;
    }
});

