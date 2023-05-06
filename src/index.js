import { ingridientsContainer, orderList, ingr } from "./constants.js";
import { createIngridientsList } from "./createElements.js";
import {
  addItemToOrderList,
  deleteItemFromOrderList,
} from "./eventListener.js";
import { Categories } from "./types.js";
window.onload = function () {
  document.body.classList.add("loaded");
};
export function renderIngridients() {
  const keys = Object.keys(ingr);
  keys.forEach((key) => createIngridientsList(ingr[key], Categories[key]));
}
renderIngridients();
ingridientsContainer.addEventListener("click", addItemToOrderList);
orderList.addEventListener("click", deleteItemFromOrderList);
