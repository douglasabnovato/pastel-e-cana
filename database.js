// ==========================================
// 1. BANCO DE DADOS (DATABASE)
// ==========================================
const DATA = {
  categorias: [
    { id: "todos", nome: "Todos", icone: "📋" },
    { id: "lancamentos", nome: "Lançamentos", icone: "🔥" },
    { id: "tradicionais", nome: "Pastéis Tradicionais", icone: "🥟" },
    { id: "especiais", nome: "Pastéis Especiais", icone: "⭐" },
    { id: "bebidas", nome: "Cana e Bebidas", icone: "🥤" },
  ],
    heroDestaques: [
        { nome: "Pastel de Carne", ingrediente: "Carne Premium", img: "./assets/pastel-e-caldo-de-cana-4.jpg" },
        { nome: "Pastel de Queijo", ingrediente: "Muçarela de Minas", img: "./assets/pastel-e-caldo-de-cana-2.jpg" },
        { nome: "Pastel de Frango", ingrediente: "Frango com Ervas", img: "./assets/pastel-e-caldo-de-cana-4.jpg" }
    ],
  produtos: [
    // Tradicionais
    {
      id: 1,
      categoria: "tradicionais",
      nome: "Pastel de Carne",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },
    {
      id: 2,
      categoria: "tradicionais",
      nome: "Pastel de Queijo",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
      lancamento: false,
    },
    {
      id: 3,
      categoria: "tradicionais",
      nome: "Pastel de Frango",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: true,
    },
    {
      id: 4,
      categoria: "tradicionais",
      nome: "Pastel de Calabresa",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },
    {
      id: 5,
      categoria: "tradicionais",
      nome: "Presunto c/ Queijo",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },

    // Especiais
    {
      id: 6,
      categoria: "especiais",
      nome: "Frango c/ Catupiry",
      preco: 11.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
      lancamento: true,
    },
    {
      id: 7,
      categoria: "especiais",
      nome: "Carne c/ Queijo",
      preco: 11.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
      lancamento: false,
    },
    {
      id: 8,
      categoria: "especiais",
      nome: "Queijo c/ Goiabada",
      preco: 11.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
      lancamento: true,
    },
    {
      id: 9,
      categoria: "especiais",
      nome: "Pastel da Casa",
      preco: 29.99,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },

    // Bebidas
    {
      id: 10,
      categoria: "bebidas",
      nome: "Caldo de Cana P",
      preco: 6.0,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },
    {
      id: 11,
      categoria: "bebidas",
      nome: "Caldo de Cana G",
      preco: 8.0,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },
    {
      id: 12,
      categoria: "bebidas",
      nome: "Refrigerante Lata",
      preco: 4.0,
      img: "./assets/pastel-e-caldo-de-cana-4.jpg",
      lancamento: false,
    },
  ],
};
