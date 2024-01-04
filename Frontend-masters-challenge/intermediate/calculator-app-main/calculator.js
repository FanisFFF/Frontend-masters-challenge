import { produceResult, calculate } from "./operations.js";

const calcScreen = document.querySelector(".calc-screen");
const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const buttons = document.querySelectorAll("button");
const del = document.querySelector(".delete");

function checkString(string) {
  return /^[0-9]*$/.test(string);
}
let curNum = "";
let curOp = "";

let num1;
let op;
let num2;

numbers.forEach((e) =>
  e.addEventListener("click", () => {
    if (curNum.length < 9) {
      curNum += e.innerHTML;
      calcScreen.innerHTML = curNum;
    }
  })
);

operations.forEach((e) =>
  e.addEventListener("click", () => {
    console.log(num1, op, num2);
    if (!num1) {
      num1 = curNum;
      curNum = "";
    } else if (!num2) {
      num2 = curNum;
      curNum = "";
    }

    if (num1) {
      curOp = e.innerHTML;
      calcScreen.innerHTML = e.innerHTML;
      op = curOp;
    }

    if (num1 && op && num2) {
      let result = produceResult(+num1, +num2, op);
      calcScreen.innerHTML = result;
      console.log(result);
      num1 = result;
      op = null;
      num2 = null;
    }
  })
);

equal.addEventListener("click", () => {
  if (!num2) {
    num2 = curNum;
    curNum = "";
  }
  console.log(num1, op, num2);
  if (num1 && op && num2) {
    let result = produceResult(+num1, +num2, op);
    calcScreen.innerHTML = result;
    console.log(result);
    num1 = result;
    op = null;
    num2 = null;
  }
});

reset.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  op = null;
  calcScreen.innerHTML = "0";
});

del.addEventListener("click", () => {
  curNum = calcScreen.innerHTML;
  curNum = curNum.length > 1 ? curNum.slice(0, -1) : "";
  calcScreen.innerHTML = curNum;
  num1 = null;
  num2 = null;
  op = null;
});
