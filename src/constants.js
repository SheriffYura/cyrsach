export const buttonOrder = document.getElementById("btn");
export const ingridientsContainer = document.getElementById(
  "ingridients-container"
);
export const orderList = document.getElementsByClassName("order-list")[0];
export const priceContainer = document.getElementById("price-container");
export const pizzaWrapper = document.getElementsByClassName("pizza-wrapper")[0];
export const ingr = {
  main: [
    { name: "Томатная основа", price: 3 },
    { name: "Сырная основа", price: 4 },
    { name: "Основа барбекю", price: 6 },
    { name: "Чесночная основа", price: 5 },
  ],
  sauce: [
    { name: "Томатный соус", price: 1 },
    { name: "Сырный соус", price: 2 },
    { name: "Соус барбекю", price: 4 },
    { name: "Чесночный соус", price: 3 },
  ],
  vegetables: [
    { name: "Маслины", price: 3 },
    { name: "Шампиньоны", price: 6 },
    { name: "Помидоры", price: 4 },
    { name: "Лук", price: 2 },
  ],
  meat: [
    { name: "Бекон", price: 7 },
    { name: "Салями", price: 4 },
    { name: "Курица", price: 3 },
    { name: "Ветчина", price: 6 },
  ],
};
export const orderState = {
  main: [],
  sauce: [],
  vegetables: [],
  meat: [],
};
export const imagesLink = [
  "../img/pizza0.png",
  "../img/pizza1.png",
  "../img/pizza2.png",
  "../img/pizza3.png",
  "../img/pizza4.png",
];
