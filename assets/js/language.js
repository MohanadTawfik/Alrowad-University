/*=============== LANGUAGE ===============*/
import translations from "./translations.js";

const languageButton = document.getElementById("language_toggler");

const getCurrentLanguage = () => (languageButton.checked ? "ar" : "en");

languageButton.onchange = () => {
  setLanguage(getCurrentLanguage());
};

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("selected_language") || "ar";
    languageButton.checked = language === "ar" ? true : false;
    setLanguage(language);
});

const setLanguage = (language) => {
  localStorage.setItem("selected_language", language);
  document.querySelectorAll("[data-lang]").forEach((element) => {
    let translationKey = element.getAttribute("data-lang");
    element.textContent = translations[language][translationKey];
    element.setAttribute("placeholder", translations[language][translationKey]);
  });
  document.body.dir = language === "ar" ? "rtl" : "ltr";
};
