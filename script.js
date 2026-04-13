// Estado do Carrinho (Volátil)
let carrinho = {
  itens: [],
  total: 0.0,
};

// Inicialização
const init = () => {
  renderCategorias();
  renderProdutos("tradicionais");
  setupEventListeners();
};

// Renderiza os botões grandes de categoria (Estilo Méqui)
const renderCategorias = () => {
  const nav = document.querySelector(".category-nav");
  nav.innerHTML = DATA.categorias
    .map(
      (cat) => `
        <div class="cat-item ${cat.id === "tradicionais" ? "active" : ""}" data-category="${cat.id}">
            <div class="cat-img-wrapper">
                <span style="font-size: 2rem;">${cat.icone}</span>
            </div>
            <span class="cat-label">${cat.nome}</span>
        </div>
    `,
    )
    .join("");
};

// Carrossel Hero - Dados específicos para o
const heroProducts = [
  {
    nome: "Pastel de Carne",
    ingrediente: "Carne Premium",
    img: "./assets/pastel-e-caldo-de-cana-4.jpg",
  },
  {
    nome: "Pastel de Queijo",
    ingrediente: "Muçarela de Minas",
    img: "./assets/pastel-e-caldo-de-cana-1.jpg",
  },
  {
    nome: "Pastel de Frango",
    ingrediente: "Frango Desfiado com Ervas",
    img: "./assets/pastel-e-caldo-de-cana-2.jpg",
  },
];

let currentSlide = 0;

const initHero = () => {
  const slider = document.getElementById("hero-slider");

  // Renderiza os slides
  slider.innerHTML = heroProducts
    .map(
      (p) => `
        <div class="slide">
            <div class="slide-info">
                <h1>${p.nome}</h1>
                <div class="special-ingredient">✨ ${p.ingrediente}</div>
            </div>
            <img src="${p.img}" class="slide-img" alt="${p.nome}">
        </div>
    `,
    )
    .join("");

  setupHeroControls();
};

const setupHeroControls = () => {
  const slider = document.getElementById("hero-slider");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  const updateSlide = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  nextBtn.onclick = () => {
    currentSlide = (currentSlide + 1) % heroProducts.length;
    updateSlide();
  };

  prevBtn.onclick = () => {
    currentSlide =
      (currentSlide - 1 + heroProducts.length) % heroProducts.length;
    updateSlide();
  };

  // Auto-play a cada 5 segundos
  setInterval(() => nextBtn.click(), 5000);
};

// Adicione initHero() ao seu DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  init(); // sua função anterior
  initHero();
});

// Renderiza os Cards de Produtos
const renderProdutos = (categoriaId) => {
  const grid = document.getElementById("product-grid");
  const filtrados = DATA.produtos.filter((p) => p.categoria === categoriaId);

  grid.innerHTML = filtrados
    .map(
      (p) => `
        <div class="product-card" onclick="adicionarAoCarrinho(${p.id})">
            <img src="${p.img}" class="product-img" onerror="this.src='./assets/pastel-e-caldo-de-cana-1.jpg'">
            <div class="product-info">
                <h3>${p.nome}</h3>
                <p class="product-price">A partir de <b>R$ ${p.preco.toFixed(2)}</b></p>
            </div>
        </div>
    `,
    )
    .join("");
};

// Lógica de Compra
const adicionarAoCarrinho = (id) => {
  const produto = DATA.produtos.find((p) => p.id === id);
  carrinho.itens.push(produto);
  carrinho.total += produto.preco;

  atualizarInterfacePedido();
};

const atualizarInterfacePedido = () => {
  // Se você tiver uma barra de total no HTML, ela atualiza aqui
  console.log(`Carrinho: R$ ${carrinho.total.toFixed(2)}`);
};

const setupEventListeners = () => {
  // Clique nas Categorias
  document.querySelector(".category-nav").addEventListener("click", (e) => {
    const item = e.target.closest(".cat-item");
    if (item) {
      document
        .querySelectorAll(".cat-item")
        .forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      renderProdutos(item.dataset.category);
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
