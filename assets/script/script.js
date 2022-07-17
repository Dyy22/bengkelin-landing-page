window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  header.classList.toggle("scrolling", window.scrollY > 0);
});

let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 6) counter = 1;
}, 5000);

let navServices = document.querySelector(".nav-services");
let servicesList = document.querySelector(".services-list");

navServices.addEventListener("click", () => {
  servicesList.classList.toggle("show");
});

let servicesListElements = servicesList.querySelectorAll("li");
let articleList = document.querySelectorAll("article");

for (let i = 0; i < servicesListElements.length; i++) {
  servicesListElements[i].addEventListener("click", () => {
    articleList[i].scrollIntoView({ block: "center" });
  });
}

let date = new Date().getFullYear();
document.querySelector(".year").innerText = date;

// hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .nav-list");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
// akhir
