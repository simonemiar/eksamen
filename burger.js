"use strict";

const burgerButton = document.querySelector(".burgerButton");
const streg1 = document.querySelector(".streg1");
const streg2 = document.querySelector(".streg2");
const streg3 = document.querySelector(".streg3");
const navbarLinks = document.querySelector(".navbarLinks");

// Når HTML og CSS er loaded startes sidenVises
window.addEventListener("load", sidenVises);

// Når #burger_btn er "clicked" startes openMenu
function sidenVises() {
  burgerButton.addEventListener("click", open);
}

function open() {
  console.log("open menu");
  streg1.classList.toggle("aktiv");
  streg2.classList.toggle("aktiv");
  streg3.classList.toggle("aktiv");
  navbarLinks.classList.toggle("aktiv");
}
