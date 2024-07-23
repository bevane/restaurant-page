import Cover from './cover.jpg'

export default function homePage() {
  console.log("homepage starting");
  const content = document.querySelector("#content");

  const headline = document.createElement("h2");
  headline.innerText = "HFood, where healthy meets tasty";

  const coverImage = document.createElement("img");
  coverImage.src = Cover

  const intro = document.createElement("p");
  intro.innerText = "Enjoy a variety of tasty food that is also healthy! Our selection is based around the mediterranean cuisine with some interesting changes";

  content.appendChild(headline);
  content.appendChild(coverImage);
  content.appendChild(intro);
}

