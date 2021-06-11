"use strict";

// Når HTML og CSS er loaded startes sidenVises
window.addEventListener("load", sidenVises);

// Når #burger_btn er "clicked" startes toggleMenu
function sidenVises() {
    const burgerBtn = document.querySelector("#burger_btn");
    burgerBtn.addEventListener("click", toggleMenu);

}

// Hvis #burger_btn og #menu ikke har classen .open, addes den.
// Hvis de omvendt har .open, removes den
function toggleMenu() {
    const burgerBtn = this;
    const menu = document.querySelector("#menu");

    burgerBtn.classList.toggle("open");
    menu.classList.toggle("open");
}
