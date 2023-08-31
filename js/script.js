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
const lists = [
  {
    id: 1,
    title: "Empresa",
    item1: "Sobre Nós",
    item2: "Nossos Serviços",
    item3: "Política De Privacidade",
    item4: "Programa De Afiliados",
  },
  {
    id: 1,
    title: "Obter Ajuda",
    item1: "Perguntas Frequentes",
    item2: "Envio",
    item3: "Retornos",
    item4: "Status Do Pedido",
  },
  {
    id: 1,
    title: "Loja Online",
    item1: "Assistir",
    item2: "Bolsa",
    item3: "Sapato",
    item4: "Vestir",
  },
];
// for (const card of cards) {
//   const item = `<div class="post-box">
//   <div class="img-box">
//     <img src="image/${card.image}" alt="imagem html" class="post-image" />
//   </div>
//   <span>${card.name}</span>
// </div>`;
//   document.querySelector(".post-container").innerHTML += item;
// }

cards.map(({ image, name }) => {
  const getCards = `<div class="post-box">
  <div class="img-box">
     <img src="image/${image}" alt="imagem html" class="post-image" />
   </div>
   <span>${name}</span>
 </div>`;
  document.querySelector(".post-container").innerHTML += getCards;
});

for (const list of lists) {
  const { item1, item2, item3, item4 } = list;
  const getList = `<div class="list-col">
  <h4>${list.title}</h4>
  <ul>
    <li><a href="#">${item1}</a></li>
    <li><a href="#">${item2}</a></li>
    <li><a href="#">${item3}</a></li>
    <li><a href="#">${item4}</a></li>
  </ul>
</div>`;
  document.querySelector(".row").innerHTML += getList;
}
