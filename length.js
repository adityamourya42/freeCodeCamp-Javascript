let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length);
/* It's important to note that if you try to access an index that doesn't exist, you'll get undefined */
console.log(fruits[3]);
// You can update an element by assigning a new value to a specific index
fruits[1] = "Blueberry";
console.log(fruits);
// you can also add new elements to an array by assigning a value to an index that doesn't exist yet.
fruits[3] = "date";
console.log(fruits);