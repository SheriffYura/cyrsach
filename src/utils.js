import { checkFullSet } from "./checkElements.js";
import { orderState } from "./constants.js";
import { changeImage, showTotalPrice } from "./showElements.js";
export function calculatePrice() {
  let totalPrice = 0;
  for (let key in orderState) {
    orderState[key].forEach((item) => (totalPrice += item.price));
  }
  return totalPrice;
}
export function deleteActiveElements(text, category) {
  const ingridTypeActiveNode = Array.from(
    document.getElementsByClassName(`ingridients ${category} active`)
  );
  ingridTypeActiveNode.forEach((node) => {
    if (node.textContent === text) {
      node.classList.remove("active");
    }
  });
}
export function clearOrderState() {
  for (let key in orderState) {
    orderState[key] = [];
  }
}

export function rerenderPriceAndImage() {
  const currentPrice = calculatePrice();
  showTotalPrice(currentPrice);
  const orderStep = checkFullSet();
  changeImage(orderStep);
}
