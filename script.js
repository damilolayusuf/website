"use strict";

window.onload = function () {
  const headerText = document.querySelector(".header--text");
  headerText.classList.add("header-text-animation");
};

const begin = document.querySelector(".btn-begin");
const sideNav = document.querySelector(".side-nav");
// const btnClose = document.querySelector(".btn-close");
const introduction = document.querySelector(".block--introduction");

begin.addEventListener("click", function () {
  sideNav.classList.add("sticky");
});

// btnClose.addEventListener("click", function () {});

const header = document.querySelector(".header");
const introductionHeight = introduction.getBoundingClientRect().height;

// sideNav.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e.target.href);
//   if (e.target.href === "#introduction") {
//     e.target.classList.add("active");
//   }
// });
// console.log(nav);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    sideNav.classList.add("sticky");
  } else {
    sideNav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
});
headerObserver.observe(header);
