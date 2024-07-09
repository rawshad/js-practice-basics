let text = "Hello world!";
let result = text.substr(1, 4);
let result1 = text.substr(2);
let result2 = text.substr(0, 1);
let result3 = text.substr(text.length-1, 1);
let result4 = text.substr(-6, 6);

document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = result1;
document.getElementById("demo2").innerHTML = result2;
document.getElementById("demo3").innerHTML = result3;
document.getElementById("demo4").innerHTML = result4;