let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);

document.getElementById("demo").innerHTML = result;
let hello = "hello";
let world = "world";
let nice = "have a nice day!"
let space = hello.concat(" ", world);
let threeWord = hello.concat(" ", world, " ", nice);

document.getElementById("space").innerHTML = space;
document.getElementById("threeWord").innerHTML = threeWord;