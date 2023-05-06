export function createIngridientsList(array, category) {
  const container = document.getElementById(`${category}-container`);
  container.textContent = "";
  array.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("ingridients");
    li.classList.add(`${category}`);
    li.textContent = `${item.price} бел.руб. - ${item.name}`;
    container.append(li);
  });
}
export function createOrderItem(name, category) {
  const container = document.getElementsByClassName("order-list")[0];
  const li = document.createElement("li");
  li.textContent = name;
  li.classList.add("order-component");
  li.classList.add(`${category}`);
  container.append(li);
}
