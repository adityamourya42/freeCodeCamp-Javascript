let lunches = [];
function addLunchToEnd(arr, str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}
console.log(addLunchToEnd(lunches, "Tacos"))
console.log(addLunchToEnd(lunches, "Pizza"));
console.log(addLunchToEnd(lunches, "Burger"));
function addLunchToStart(arr, str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}
console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(lunches, "Salad"));
console.log(addLunchToStart(lunches, "Biriyani"));
function removeLastLunch(arr){
  let pop = arr.pop();
  console.log(`${pop} removed from the end of the lunch menu.`);
  if(arr.length === 0){
    console.log("No lunches to remove.")
  }
  return arr;
}
console.log(removeLastLunch(lunches));
function removeFirstLunch(arr){
  if(arr.length=== 0){
    console.log("No lunches to remove.");
  }
  let pop = arr.shift();
  console.log(`${pop} removed from the start of the lunch menu.`);
  return arr;
}
console.log(removeFirstLunch(lunches));
function getRandomLunch(arr){
  if(arr.length === 0){
    console.log("No lunches available.");
    return null;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomLunch = arr[randomIndex];
  console.log(`Randomly selected lunch: ${randomLunch}`);
  return randomLunch;
}
function showLunchMenu(arr){
  if(arr.length === 0){
    console.log("The menu is empty.");
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}
console.log(showLunchMenu(lunches));