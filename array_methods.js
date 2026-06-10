const fruit = ["apple", "banana", ];
const newLength = fruit.push("orange");
console.log(fruit);
console.log(newLength);

const lastFruit = fruit.pop();
console.log(fruit);
console.log(lastFruit);

const numbers = [2,3];
const newlength = numbers.unshift(0, 1);
console.log(numbers);
console.log(newlength);

let color = ["red", "green", "blue"];
console.log(color);
const firstColor = color.shift();
console.log(color);
console.log(firstColor);
const newColor = color.unshift("yellow", "green");
console.log(color);
console.log(newColor);