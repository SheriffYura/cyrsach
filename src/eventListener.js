import { orderState, ingr } from "./constants.js";
import { createOrderItem } from "./createElements.js";
import { rerenderPriceAndImage } from "./utils.js";
import { isAddIngridients } from "./checkElements.js";

import { deleteOrderItem } from "./deleteElements.js";

import { Categories } from "./types.js";
export function addItemToOrderList(e) {
  if (e.target.nodeName === "LI") {
    const text = e.target.textContent;
    const category = e.target.parentNode.id.split("-")[0];
    if (isAddIngridients(category, text)) {
      if (category === Categories.main) {
        const component = ingr.main.filter(
          (item) => item.name === text.split("- ")[1]
        );
        orderState.main.push(...component);
      } else if (category === Categories.meat) {
        const component = ingr.meat.filter(
          (item) => item.name === text.split("- ")[1]
        );
        orderState.meat.push(...component);
      } else if (category === Categories.sauce) {
        const component = ingr.sauce.filter(
          (item) => item.name === text.split("- ")[1]
        );
        orderState.sauce.push(...component);
      } else if (category === Categories.vegetables) {
        const component = ingr.vegetables.filter(
          (item) => item.name === text.split("- ")[1]
        );
        orderState.vegetables.push(...component);
      }
      createOrderItem(text, category);
      rerenderPriceAndImage();
      e.target.classList.add("active");
    }
  }
}
export function deleteItemFromOrderList({ target }) {
  const targetElem = target;
  const text = target.textContent;
  const category = target.classList[1];
  let indexElem = 0;
  switch (category) {
    case Categories.main:
      orderState.main.forEach(({ name }, index) => {
        if (text.includes(name)) {
          indexElem = index;
        }
      });
      orderState.main.splice(indexElem, 1);
      deleteOrderItem(text, category, targetElem);
      break;
    case Categories.meat:
      orderState.meat.forEach(({ name }, index) => {
        if (text.includes(name)) {
          indexElem = index;
        }
      });
      orderState.meat.splice(indexElem, 1);
      deleteOrderItem(text, category, targetElem);
      break;
    case Categories.sauce:
      orderState.sauce.forEach(({ name }, index) => {
        if (text.includes(name)) {
          indexElem = index;
        }
      });
      orderState.sauce.splice(indexElem, 1);
      deleteOrderItem(text, category, targetElem);
      break;
    case Categories.vegetables:
      orderState.vegetables.forEach(({ name }, index) => {
        if (text.includes(name)) {
          indexElem = index;
        }
      });
      orderState.vegetables.splice(indexElem, 1);
      deleteOrderItem(text, category, targetElem);
      break;
  }
}
