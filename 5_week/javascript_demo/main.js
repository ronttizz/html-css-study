const header = document.querySelector("header");
const button = document.querySelector("#backtotop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

window.onscroll = () => {
  scrollFunction();
};

scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
    button.style.display = "block";
    mobButton.style.color = "black";
  } else {
    header.classList.remove("bg");
    button.style.display = "none";
    mobButton.style.color = "white";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

button.addEventListener("click", getToTop);

const mobMenu = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

mobButton.addEventListener("click", mobMenu);
