const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu__icon");
const body = document.querySelector(".body");

menuIcon.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    body.classList.remove("_lock");
    menuIcon.childNodes[0].classList.remove("fa-times");
    menuIcon.childNodes[0].classList.add("fa-bars");
  } else {
    menu.classList.add("active");
    body.classList.add("_lock");
    menuIcon.childNodes[0].classList.remove("fa-bars");
    menuIcon.childNodes[0].classList.add("fa-times");
  }
});
