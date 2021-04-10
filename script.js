"use strict";

window.onload = function () {
  const headerText = document.querySelector(".header--text");
  headerText.classList.add("header-text-animation");
  mobileHeader(x); // Call listener function at run time
};

const markupVideo = `<video class="header-video__content" autoplay muted loop>
<source src="img/header-video-2.mp4" type="video/mp4" />
 <source src="img/video.webm" type="video/webm" /> 
Your browser is not supported!
</video>`;
const markupImage = ` <div class="header--image"></div>`;
const header = document.querySelector(".header");
const headerContent = document.querySelector(".header--content");

const x = window.matchMedia("(max-width: 37.5em)");
const mobileHeader = function (x) {
  if (x.matches) {
    // If media query matches
    headerContent.innerHTML = "";
    headerContent.insertAdjacentHTML("afterbegin", markupImage);
  } else {
    headerContent.innerHTML = "";
    headerContent.insertAdjacentHTML("afterbegin", markupVideo);
  }
};

x.addEventListener("change", mobileHeader);

const begin = document.querySelector(".btn-begin");
const sideNav = document.querySelector(".side-nav");
// const btnClose = document.querySelector(".btn-close");
const introduction = document.querySelector(".block--introduction");

begin.addEventListener("click", function () {
  sideNav.classList.add("sticky");
});

// btnClose.addEventListener("click", function () {});

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
