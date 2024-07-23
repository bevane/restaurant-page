export default function menuPage() {
  const content = document.querySelector("#content");

  const headline = document.createElement("h2");
  headline.innerText = "Daily Menu";

  const menu = document.createElement("div");

  const sec1 = document.createElement("div");
  const sec2 = document.createElement("div");
  const sec3 = document.createElement("div");

  const sec1Title = document.createElement("h4");
  const sec2Title = document.createElement("h4");
  const sec3Title = document.createElement("h4");

  sec1Title.innerText = "Appetizer";
  sec2Title.innerText = "Main";
  sec3Title.innerText = "Dessert";

  const sec1Ul = document.createElement("ul");
  const sec2Ul = document.createElement("ul");
  const sec3Ul = document.createElement("ul");

  const appetizerFoods = ["Tomato Soup", "Mushroom Soup"];
  const mainFoods = ["Baked Cod with Lemon and Garlic", "Spanakopita Egg Muffins"];
  const dessertFoods = ["Persian Love Cake"];

  let newItem
  for (let food of appetizerFoods) {
    newItem = document.createElement("li");
    newItem.innerText = food;
    sec1Ul.appendChild(newItem);
  }
  for (let food of mainFoods) {
    newItem = document.createElement("li");
    newItem.innerText = food;
    sec2Ul.appendChild(newItem);
  }
  for (let food of dessertFoods) {
    newItem = document.createElement("li");
    newItem.innerText = food;
    sec3Ul.appendChild(newItem);
  }

  sec1.appendChild(sec1Title);
  sec1.appendChild(sec1Ul);
  sec2.appendChild(sec2Title);
  sec2.appendChild(sec2Ul);
  sec3.appendChild(sec3Title);
  sec3.appendChild(sec3Ul);

  menu.appendChild(sec1);
  menu.appendChild(sec2);
  menu.appendChild(sec3);

  content.appendChild(headline);
  content.appendChild(menu);

}

