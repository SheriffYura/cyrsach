import { orderState, buttonOrder } from "./constants.js";
import { Categories } from "./types.js";
export function checkFullSet() {
    let stepOrder = 0;
    for (let key in orderState) {
        if (key === Categories.main) {
            stepOrder += orderState[key].length === 1 ? 1 : 0;
        }
        if (key === Categories.meat) {
            stepOrder += orderState[key].length !== 0 && orderState[key].length <= 2 ? 1 : 0;
        }
        if (key === Categories.sauce) {
            stepOrder += orderState[key].length === 1 ? 1 : 0;
        }
        if (key === Categories.vegetables) {
            stepOrder += orderState[key].length !== 0 && orderState[key].length <= 2 ? 1 : 0;
        }
    }
    if (stepOrder === 4) {
        buttonOrder.disabled = false;
    }
    else {
        buttonOrder.disabled = true;
    }
    return stepOrder;
}
export function isAddIngridients(category, text) {
    switch (category) {
        case Categories.main:
            return orderState.main.length === 0;
        case Categories.meat:
            return orderState.meat.length < 2 && orderState.meat.every((item) => !text.includes(item.name));
        case Categories.sauce:
            return orderState.sauce.length === 0;
        case Categories.vegetables:
            return orderState.vegetables.length < 2 && orderState.vegetables.every((item) => !text.includes(item.name));
        default:
            return false;
    }
}
