let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

const cards = [
  { id: 1, name: "html", image: "icon-1.png" },
  { id: 2, name: "css", image: "icon-2.png" },
  { id: 3, name: "javascript", image: "icon-3.png" },
  { id: 4, name: "react", image: "icon-6.png" },
  { id: 5, name: "bootstrap", image: "icon-4.png" },
  { id: 6, name: "github", image: "icon-5.png" },
];

// for (const card of cards) {
//   const card = `<div class="post-box">
//   <div class="img-box">
//     <img src="image/${card.image}" alt="imagem html" class="post-image" />
//   </div>
//   <span>${card.name}</span>
// </div>`;
//   document.querySelector(".post-container").innerHTML += item;
// }

cards.map((card) => {
  const getCards = `<div class="post-box">
  <div class="img-box">
     <img src="image/${card.image}" alt="imagem html" class="post-image" />
   </div>
   <span>${card.name}</span>
 </div>`;
 document.querySelector(".post-container").innerHTML += getCards
});
