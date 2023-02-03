//Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};
let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

window.sr = ScrollReveal();

sr.reveal('.animate-left', {

origin: "left",

duration: 1800,

distance: "25 rem",

delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25 rem', 
  delay: 600
  });