let text = "How are you doing today?";
const myArray = text.split(" ");
const myArray1 = text.split("");
const myArray3 = text.split(" ", 3);

document.getElementById("demo").innerHTML = myArray; 
document.getElementById("demo1").innerHTML = myArray[1];
document.getElementById("demo2").innerHTML = myArray1;
document.getElementById("demo3").innerHTML = myArray3;