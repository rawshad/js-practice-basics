let text = "Hello world, welcome to the universe.";
let result = text.startsWith("Hello");
let result1 = text.startsWith("world", 7);

document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = result1;