let text1 = "ab";
let text2 = "cd";
let text3 = "ab";
let text4 = "A";
let text5 = "a";
let result = text1.localeCompare(text2);
let result1 = text2.localeCompare(text1);
let result2 = text1.localeCompare(text3);
let result3 = text4.localeCompare(text5);

document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = result1;
document.getElementById("demo2").innerHTML = result2;
document.getElementById("demo3").innerHTML = result3;