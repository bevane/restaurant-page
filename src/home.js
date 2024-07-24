import Cover from './cover.jpg'

export default function homePage() {
  const content = document.querySelector("#content");

  const headline = document.createElement("h2");
  headline.innerText = "HFood, where healthy meets tasty";

  const coverImage = document.createElement("img");
  coverImage.src = Cover

  const imgCredit = document.createElement("div");
  imgCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@annapelzer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Pelzer</a> on <a href="https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';


  const intro = document.createElement("p");
  intro.innerText = "Enjoy a variety of tasty food that is also healthy! Our selection is based around the mediterranean cuisine with some interesting changes";

  content.appendChild(headline);
  content.appendChild(coverImage);
  content.appendChild(imgCredit);
  content.appendChild(intro);
}

