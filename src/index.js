import homePage from "./home.js";

console.log("webpack working");

(function changeContent() {
  const content = document.querySelector("#content");
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector(".menu");
  const aboutBtn = document.querySelector(".about");

  homeBtn.addEventListener("click", () => {
    content.replaceChildren();
    homePage();
  });

})();
