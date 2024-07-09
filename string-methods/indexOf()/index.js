const text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");

document.getElementById("firstOccu").innerHTML = result;

let resultOne = text.indexOf("Welcome");

document.getElementById("demo").innerHTML = resultOne;

let resultofE = text.indexOf("e");

document.getElementById("eOccurance").innerHTML = resultofE;

let occuranceByIndex = text.indexOf("e", 5);

document.getElementById("occuranceByIndex").innerHTML = occuranceByIndex;

let invalidSearch = text.indexOf("a", 5);

document.getElementById("invalidSearch").innerHTML = invalidSearch;