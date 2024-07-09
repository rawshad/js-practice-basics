//toString() method
let x = 265;
console.log(typeof x.toString());//varriable x
console.log(typeof(265).toString());//literral 265
console.log(typeof(200 + 65).toString());//expression 200 +65

//toExponential() method
let e = 1000;
let f = 1321658746541341087465413213576;
console.log(e.toExponential(6));
console.log(f.toExponential(6));

//toFixed() method. this is method is perfect for working with money
let g = 6.746;
console.log(g.toFixed(0));
console.log(g.toFixed(2));

//toPrecision() method, rerurns a string, with a number written with a specified length
let h = 9.656;
console.log(h.toPrecision());
console.log(h.toPrecision(2));
console.log(h.toPrecision(3));

//Number() method returns a number converted from it's argument
console.log(Number(true));
console.log(Number(false));
console.log(Number("false"));
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number(new Date("2017-09-30")));//can also converted a date to a number

//parseInt() method parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("10.33 20 30"));