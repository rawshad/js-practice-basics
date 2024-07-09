let text = "Hello world, welcome to the universe.";
let result = text.includes("world");

document.getElementById("demo").innerHTML = result;


let positionIndex = "Hello world, welcome to the universe.";
let newResult = text.includes("world", 12);

document.getElementById("positionIndex").innerHTML = newResult;