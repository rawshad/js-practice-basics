const text = "HELLO WORLD";
let firstLetter = text.charAt(0);
let secondLetter = text.charAt(1);
let lastLetter = text.charAt(text.length - 1);


// Index out of range returns empty string:
let outOfrange = text.charAt(15);
let newRange = typeof(outOfrange);

// Default index is 0:
let defaultIndex = text.charAt();

// Invalid index converts to 0:
let invalidIndex = text.charAt(1.25);

document.getElementById("firstLetter").innerHTML = firstLetter;
document.getElementById("secondLetter").innerHTML = secondLetter;
document.getElementById("lastLetter").innerHTML = lastLetter;
document.getElementById("outOfrange").innerHTML = `<p>the output is empty ${newRange}</p>`;
document.getElementById("defaultIndex").innerHTML = `<p>the default index is the first charracter ${defaultIndex}</p>`;
document.getElementById("invalidIndex").innerHTML = `<p>It takes the number before decimal as a index parrameter and the rest after decimal doesn't count. the index parameter is 1.25 so it takes 1 and .25 turns into 0 : ${invalidIndex}</p>`;