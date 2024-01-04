function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function produceResult(num1, num2, currentOp) {
  let result = "";
  console.log(num1, currentOp, num2);
  if (currentOp === "+") result = add(num1, num2);
  else if (currentOp === "-") result = subtract(num1, num2);
  else if (currentOp === "x") result = mult(num1, num2);
  else if (currentOp === "/") result = divide(num1, num2);
  else if (currentOp === "RESET") console.log("RESET");
  else if (currentOp === "=") result = num1;

  return result;
}
function calculate() {
  let stringArr = "2+2";
  let result = 0;
  result += arr[0];
  arr.forEach((el, i) => {
    if (Number.isInteger(el)) {
      if (arr[i - 1] === "+") result += el;
      else if (arr[i - 1] === "-") result -= el;
      else if (arr[i - 1] === "x") result *= el;
      else if (arr[i - 1] === "/") result /= el;
    }
    console.log(result);
  });
  console.log(result);
  return result;
}

export { produceResult, calculate };
