let text = "Hello world";
let textOne = "Hello World"
let result =  text.endsWith("world");
let upperCase = textOne.endsWith("world")

document.getElementById("lowerCase").innerHTML = result;
document.getElementById("upperCase").innerHTML = upperCase;


let str = "Hello world, welcome to the universe.";
document.getElementById("charIndex").innerHTML = str.endsWith("world", 11);