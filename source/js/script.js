var btnMenu = document.querySelector(".main-nav__toggle--menu");
var popupMenu = document.querySelector(".site-list");

if (btnMenu) {
  btnMenu.classList.add("main-nav__toggle--on");
  popupMenu.classList.add("site-list--hidden");

  btnMenu.addEventListener("click", function (evt) {
    btnMenu.classList.toggle("main-nav__toggle--close");
    btnMenu.classList.toggle("main-nav__toggle--menu");
    popupMenu.classList.toggle("site-list--hidden");
  });
};
