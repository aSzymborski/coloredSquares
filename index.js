import { calculateByContext } from "./calculate.js";

const redSquares = document.querySelectorAll(".red");
const yellowSquares = document.querySelectorAll(".yellow");
const blueSquares = document.querySelectorAll(".blue");

const addEventListenerByClass = (list, event, cb) => {
  list.forEach((item) => {
    item.addEventListener(event, cb);
  });
};

const eventHandler = (context) => {
  const inputNodes = document.getElementsByName("qty");
  const arr = Array.from(inputNodes).map((inputNode) => {
    return parseInt(inputNode.value || "0");
  });

  const total = calculateByContext(context, arr);
  document.querySelector(".form__input-output").value = total;
};

addEventListenerByClass(redSquares, "click", () => {
  eventHandler("sum");
});

addEventListenerByClass(yellowSquares, "click", () => {
  eventHandler("subtract");
});

addEventListenerByClass(blueSquares, "click", () => {
  eventHandler("multiply");
});
