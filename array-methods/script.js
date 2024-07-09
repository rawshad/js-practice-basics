//javascript array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//javascript array toString()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let newFruit = fruits1.toString();
console.log(newFruit);

// JavaScript Array at()

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruitAt = fruits2.at(2);
console.log(fruitAt);

// JavaScript Array join()

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.join("*"));
console.log(fruits3.pop());
console.log(fruits3.push());
console.log(fruits3.shift());
console.log(fruits3.unshift());
console.log(fruits3.length());
console.log(delete fruits3[0]);
console.log(fruits3.copyWithin(2, 0, 2));


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);