// menu===========================================
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("show");
  if (document.querySelector(".menu").classList.contains("fa-bars")) {
    document.querySelector(".menu").classList.replace("fa-bars", "fa-xmark");
  } else {
    document.querySelector(".menu").classList.replace("fa-xmark", "fa-bars");
  }
});
window.addEventListener("scroll", function () {
  if (window.innerWidth > 768) {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.backdropFilter = "";
    }
  }
});
document
  .querySelectorAll("body > header > div > nav > ul > li")
  .forEach((e) => {
    e.addEventListener("click", () => {
      document.querySelector(".menu").classList.replace("fa-xmark", "fa-bars");
      document.querySelector("header nav ul").classList.toggle("show");
    });
  });
//loader================================================
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
  AOS.init();
});
