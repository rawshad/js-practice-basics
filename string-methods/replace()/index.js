let text = document.getElementById("demo").innerHTML; 
document.getElementById("demo").innerHTML = text.replace("Microsoft", "W3Schools");

let str = document.getElementById("demo1").innerHTML; 
let res = str.replace(/blue/g, "red");
let res1 = str.replace(/blue/gi, "red");
document.getElementById("demo1").innerHTML = res;
document.getElementById("demo2").innerHTML = res1;


let text1 = document.getElementById("demo3").innerHTML; 
let result = text1.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});

document.getElementById("demo3").innerHTML = result;