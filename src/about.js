export default function aboutPage() {
  const content = document.querySelector("#content");

  const headline = document.createElement("h2");
  headline.innerText = "About Us";

  const intro = document.createElement("p");
  intro.innerText = "HFood was found in 1968 as a market stall, serving fresh food harvested directly from the farm. We grew to a fully fledged restaurant in 1990."

  content.appendChild(headline);
  content.appendChild(intro);
}

