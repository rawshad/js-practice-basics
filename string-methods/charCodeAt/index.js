const text = "HELLO WORLD";
let firstChar = text.charCodeAt(0);
let secondChar = text.charCodeAt(1);
document.getElementById("firstChar").innerHTML = firstChar;
document.getElementById("secondChar").innerHTML = secondChar;

// Get the Unicode of the last character in a string:
let lastChar = text.charCodeAt(text.length-1);
document.getElementById("lastChar").innerHTML = lastChar;
// Get the Unicode of the last character in a string:
let outOfrange = text.charCodeAt(15);
document.getElementById("outOfrange").innerHTML = outOfrange;