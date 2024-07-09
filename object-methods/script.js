// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
  Object.assign(person1, person2);

//Object.entries()
  const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let text = Object.entries(person);

  const fruits = {Bananas:300, Oranges:200, Apples:500};

let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text1 += fruit + ": " + value + "<br>";
}

const fruits1 = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruits1));

//Object.fromEntries
const fruits2 = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
  
  const myObj = Object.fromEntries(fruits2);
  
  //Object.values()
  const person5 = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let text5 = Object.values(person5);

//Object.groupBy()
  // Create an Array
const fruits10 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Object.groupBy(fruits10, myCallback);

//Object.keys()
// Create an Object
const person10 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Get the Keys
  const keys = Object.keys(person10);

  const person52 = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person52) {
    txt += person52[x];
  }