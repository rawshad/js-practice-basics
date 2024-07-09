const text = "Hello planet earth, you are a great planet.";

let result = text.lastIndexOf("planet");
document.getElementById("demo").innerHTML = result;

let invalidUppercase = text.lastIndexOf("Planet");
document.getElementById("invalidUppercase").innerHTML = invalidUppercase;

let charIndex = text.lastIndexOf("planet", 20);
document.getElementById("charIndex").innerHTML = charIndex;