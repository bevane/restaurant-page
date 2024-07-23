import homePage from "./home.js";
import menuPage from "./menu.js";

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

})();
