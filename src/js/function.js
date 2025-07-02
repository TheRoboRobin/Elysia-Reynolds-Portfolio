// MENU FUNCTIONALITY

const menu = document.querySelector(".navigation__menu");

document.body.addEventListener("click", function (event) {
  if (event.target.id === "navigation__icon") menu.classList.toggle("open");
});
