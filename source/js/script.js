var btnMenu = document.querySelector(".main-nav__toggle--menu");
var popupMenu = document.querySelector(".site-list");

btnMenu.classList.add("main-nav__toggle--on");
popupMenu.classList.add("site-list--hidden");

if (btnMenu) {
  btnMenu.addEventListener("click", function (evt) {
    // evt.preventDefault();
    if (btnMenu == document.querySelector(".main-nav__toggle--menu")) {
      btnMenu.classList.add("main-nav__toggle--close");
      btnMenu.classList.remove("main-nav__toggle--menu");
      popupMenu.classList.remove("site-list--hidden");
    } else if (btnMenu == document.querySelector(".main-nav__toggle--close")) {
      btnMenu.classList.add("main-nav__toggle--menu");
    btnMenu.classList.remove("main-nav__toggle--close");
    popupMenu.classList.add("site-list--hidden");
    };
  });
};
