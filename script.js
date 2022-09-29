const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});
