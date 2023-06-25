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
//loader================================================
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
  AOS.init();
});
