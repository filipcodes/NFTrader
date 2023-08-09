"use strict";
const homeBtnEl = document.querySelector(".home-btn"),
  hoursTimeEl = document.querySelector(".hours-time"),
  minutesTimeEl = document.querySelector(".minutes-time"),
  secondsTimeEl = document.querySelector(".seconds-time"),
  headerEl = document.querySelector(".header"),
  navOpenEl = document.querySelector(".nav-open-btn"),
  loaderEl = document.querySelector(".loader");

// =======================LOADER=====================

window.addEventListener("load", vanish);
function vanish() {
  loaderEl.classList.add("disappear");
}
// ===================TIMEOUT======================
// GET CURRENT TIME
let today = new Date();
let timeOfOpeningHours = today.getHours();
let timeOfOpeningMins = today.getMinutes();
let timeOfOpeningSecs = today.getSeconds();
let secondsTillMn =
  86400 -
  timeOfOpeningHours * 3600 -
  timeOfOpeningMins * 60 -
  timeOfOpeningSecs;

let hoursTillMn = Math.trunc(secondsTillMn / 3600);
// let minsTillMn = Math.trunc((secondsTillMn - 3600 * hoursTillMn) / 60);
// secondsTillMn = secondsTillMn - hoursTillMn * 3600 - minsTillMn * 60;

function addZeros(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function updateCountdown() {
  let hoursTillMn = Math.trunc(secondsTillMn / 3600);
  let minsTillMn = Math.trunc((secondsTillMn - 3600 * hoursTillMn) / 60);
  let sTillMn = secondsTillMn - hoursTillMn * 3600 - minsTillMn * 60;

  minutesTimeEl.innerHTML = addZeros(minsTillMn);
  hoursTimeEl.innerHTML = addZeros(hoursTillMn);
  secondsTimeEl.innerHTML = addZeros(sTillMn);
  secondsTillMn--;
}
setInterval(updateCountdown, 1000);

// =====================STICKY HEADER BG CHANGE===================
const headerScroll = () => {
  this.scrollY >= 50
    ? headerEl.classList.add("scroll-header")
    : headerEl.classList.remove("scroll-header");
};
window.addEventListener("scroll", headerScroll);

//======================NAV OPENING AND CLOSING=====================
navOpenEl.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("drop-nav-open");
});
// =====================SCROLL REVEALING=========================
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
});

sr.reveal(`.home-images`, { distance: "8rem", delay: 400 });
sr.reveal(`.home-title`, { delay: 1000 });
sr.reveal(`.home-subhead`, { delay: 1200 });
sr.reveal(homeBtnEl, { delay: 1400 });
sr.reveal(".home-auction", { delay: 1600 });
sr.reveal(".home-data div", { origin: "right", interval: 100, delay: 1800 });
