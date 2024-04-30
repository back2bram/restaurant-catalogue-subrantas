import "regenerator-runtime";
import "../styles/main.css";

import("../public/data/DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datar = jsonData["restaurants"];
  let dataList = "";
  datar.forEach(function (datacontent) {
    dataList += `
      <div class="list_item">
          <img class="list_item_thumb" src="${datacontent["pictureId"]}" alt="${datacontent["name"]}" title="${datacontent["name"]}">
          <div class="city">${datacontent["city"]}</div>
          <div class="list_item_content">
              <p class="list_item_rating">
                  Rating : 
                  <a href="#" class="list_item_rating_value">${datacontent["rating"]}</a>
              </p>
              <h1 class="list_item_title"><a href="#">${datacontent["name"]}</a></h1>
              <div class="list_item_desc">${datacontent["description"].slice(0, 150)}...</div>
          </div>
      </div>
      `;
  });
  document.querySelector("#contentList").innerHTML = dataList;
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  reset: true,
});

sr.reveal(".hero-text", { delay: 200, origin: "left" });

sr.reveal(".favorite", {
  delay: 200,
  origin: "bottom",
});
