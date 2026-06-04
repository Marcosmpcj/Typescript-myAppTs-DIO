const dataCenter = [
  {
    name: "Marcos Paulo",
    email: "marcos@dio.bank",
    password: "323940",
    balance: 32500.0,
    id: "marcosmpcj",
  },
  {
    name: "Eline Alves",
    email: "eline@dio.bank",
    password: "975762",
    balance: 1600.0,
    id: "elinealves",
  },
  {
    name: "Murilo Dante",
    email: "murilo@dio.bank",
    password: "tricolor",
    balance: 58200.0,
    id: "murilodante",
  },
];

export const api = new Promise((resolve) => {
  setTimeout(() => resolve(dataCenter), 3000);
});
