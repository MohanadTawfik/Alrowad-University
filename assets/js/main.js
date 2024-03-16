/*=============== DARK LIGHT THEME ===============*/
const themeCheckBox = document.getElementById("theme-toggler");

const getCurrentTheme = () => (themeCheckBox.checked ? "dark" : "light");

document.addEventListener("DOMContentLoaded", () => {
  themeCheckBox.checked =
    localStorage.getItem("selected_theme") === "dark" ? true : false;
});

themeCheckBox.onchange = () => {
  localStorage.setItem("selected_theme", getCurrentTheme());
};

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height , add the shadow-header class to the header tag
  window.scrollY >= 50
    ? header.classList.add("shadow--header")
    : header.classList.remove("shadow--header");
};

window.addEventListener("scroll", shadowHeader);

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");
    // Add show-icon to show and hide menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scroll = document.getElementById("scroll_up");
  // when the scroll is greater than 350 viewport height , add the show-scroll class to the header tag
  this.scrollY >= 350
    ? scroll.classList.add("show-scroll")
    : scroll.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*================================== Preloader ==================================*/
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }, 1000);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 100,
  //reset: true, // Animation repeat
});

sr.reveal(
  ".section, .footer, .why_us__card, .stats__card, .more_button, .footer_logo"
);
sr.reveal(".services__card:nth-child(1)", { delay: 300, origin: "left" });
sr.reveal(".services__card:nth-child(2)", { delay: 300, origin: "bottom" });
sr.reveal(".services__card:nth-child(3)", { delay: 300, origin: "top" });
sr.reveal(".services__card:nth-child(4)", { delay: 300, origin: "right" });
sr.reveal(
  ".programs__tabs, .about__image, .gauls__list>li, .list__group__col:last-child, .activities__container .card:nth-child(2), .footer_data",
  {
    origin: "left",
  }
);
sr.reveal(
  ".programs__content, .about__data, .gauls__list>li.gauls-inverted, .list__group__col:first-child, .notafication, .activities__container .card:nth-child(1), .activities__container .card:nth-child(3), .footer__contact_us",
  {
    origin: "right",
  }
);
