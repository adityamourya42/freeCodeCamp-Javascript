let fruits = ["apple", "banana", "orange"];
let [first, second, third, fourth="pineapple"] = fruits;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth)
let [, secondFruit, thirdFruit, fourthFruit] = fruits;
console.log(secondFruit);
console.log(thirdFruit);
console.log(fourthFruit);

let colors = ["red", "green", "blue", "yellow"];
let [firstColor,, thirdColor] = colors;
console.log(firstColor);
console.log(thirdColor);

let number = [1,2];
let [a,b, c= 3] = number;
console.log(a);
console.log(b);
console.log(c);

let fruit = ["apple", "banana", "orange", "mango", "kiwi"];
let [firstFruit, secondFruit1, ...restFruits] = fruit;
console.log(firstFruit);
console.log(secondFruit1);
console.log(restFruits);