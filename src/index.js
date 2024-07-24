import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

(function changeContent() {
  const content = document.querySelector("#content");
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const aboutBtn = document.querySelector(".about");

  homeBtn.addEventListener("click", () => {
    content.replaceChildren();
    homePage();
  });

  menuBtn.addEventListener("click", () => {
    content.replaceChildren();
    menuPage();
  });

  aboutBtn.addEventListener("click", () => {
    content.replaceChildren();
    aboutPage();
  });

})();
