// Banco de dados isolado
const DATA = {
  categorias: [
    { id: "lancamentos", nome: "Lançamentos", icone: "🔥" },
    { id: "tradicionais", nome: "Pastéis Tradicionais", icone: "🥟" },
    { id: "especiais", nome: "Pastéis Especiais", icone: "⭐" },
    { id: "bebidas", nome: "Cana e Bebidas", icone: "🥤" },
  ],
  produtos: [
    // Tradicionais - R$ 7,99 conforme fotos enviadas
    {
      id: 1,
      categoria: "tradicionais",
      nome: "Pastel de Carne",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-1.jpg",
    },
    {
      id: 2,
      categoria: "tradicionais",
      nome: "Pastel de Queijo",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-1.jpg",
    },
    {
      id: 3,
      categoria: "tradicionais",
      nome: "Pastel de Frango",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-1.jpg",
    },
    {
      id: 4,
      categoria: "tradicionais",
      nome: "Pastel de Calabresa",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-1.jpg",
    },
    {
      id: 5,
      categoria: "tradicionais",
      nome: "Presunto c/ Queijo",
      preco: 7.99,
      img: "./assets/pastel-e-caldo-de-cana-1.jpg",
    },

    // Especiais - R$ 11,99 conforme fotos enviadas
    {
      id: 6,
      categoria: "especiais",
      nome: "Frango c/ Catupiry",
      preco: 11.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },
    {
      id: 7,
      categoria: "especiais",
      nome: "Carne c/ Queijo",
      preco: 11.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },
    {
      id: 8,
      categoria: "especiais",
      nome: "Queijo c/ Goiabada",
      preco: 11.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },
    {
      id: 9,
      categoria: "especiais",
      nome: "Pastel da Casa",
      preco: 29.99,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },

    // Bebidas - Extraídas das placas de caldo de cana
    {
      id: 10,
      categoria: "bebidas",
      nome: "Caldo de Cana P (300ml)",
      preco: 6.0,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },
    {
      id: 11,
      categoria: "bebidas",
      nome: "Caldo de Cana G (500ml)",
      preco: 8.0,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },
    {
      id: 12,
      categoria: "bebidas",
      nome: "Refrigerante Lata",
      preco: 4.0,
      img: "./assets/pastel-e-caldo-de-cana-2.jpg",
    },
  ],
};
