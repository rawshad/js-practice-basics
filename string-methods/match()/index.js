const text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");
let result1 = text.match(/ain/);
let result2 = text.match(/ain/g);
let result3 = text.match(/ain/gi);
 
document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = result1;
document.getElementById("demo2").innerHTML = result2;
document.getElementById("demo3").innerHTML = result3;