let text = "Hello world!";
let result = text.substring(1, 4);
let result1 = text.substring(2);
let result2 = text.substring(4, 1);
let result3 = text.substring(-3);

document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = result1;
document.getElementById("demo2").innerHTML = result2;
document.getElementById("demo3").innerHTML = result3;