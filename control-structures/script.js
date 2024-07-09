//Booleans
function start(){
	let haveCat = true;
	console.log(haveCat);
}

start ();

//The NOT operator
function lightSwitch(){
	let lightOn = true;
	console.log(("Light on? " + lightOn));
	lightOn = !lightOn;	
	console.log(("Light on? " + lightOn));
	lightOn = !lightOn;	
	console.log(("Light on? " + lightOn));	
}
lightSwitch();


//AND operator
let sixThirty = true;
let schoolDay = false;
console.log((sixThirty && schoolDay));

//OR operator
let isRaining = true;
let isCold = false;
console.log(("is it raining? : ", isRaining || isCold));

function isWastingTime(){
	let onFacebook = false;
	let onEmail = true;
	
	// This is true if one, or the other, 
	// or both are true.
	let isWastingTime = 
		onFacebook || onEmail;
	
	console.log(("Wasting time? " + 			
		isWastingTime));
}
isWastingTime();

var isBreakfast = true;
var isLunch = false;
var isSupper = false;
var isMealTime = isBreakfast || isLunch || isSupper;
console.log("is this mealtime? : ", isMealTime);

function eligibility(){
	var isSixteen = true;
	var testPassed = false;
	var getLicense = isSixteen && !testPassed;
	console.log(("your are eligible for driving license - " + 			
		getLicense));
}

eligibility();


// comparison operators
// --basic comparison
var a = 3;
var b = 5;
var c = 2;
var d = 3;

var t = a > 0;
var u = a == d;
var v = d >= b;
var w = b > c;
var x = a != d;
var y = d <= a;
var z = 4 <= c;
console.log(t, u, v, w, x , y, z);

function gradeRange(){
	var grade = "What was your grade?";
	var gotB = grade >= 80 && grade < 90;
	console.log(("Got a B: " + gotB));
}
gradeRange();

// function votingAge() {
//     let age = prompt("what is your age");
//     let oldEnough = age >= 18;
//     console.log("can vote: " + oldEnough);
// }
// votingAge();

// function rollingDice() {
//     let rolledNine = true;
//     let firstDie = prompt("give the number");
//     let secondDie =prompt("give the number");
//     let diceSum = 9;
//     if (diceSum == firstDie + secondDie) {
//         console.log(rolledNine);
//     }
// }
// rollingDice();

// if statements
// --Negative Numbers - if statement
function negativeNumbers() {
    let number = -9;
    if (number < 0) {
        console.log("number is negative");
    }
}
negativeNumbers();

// --if/else statements 
function evenOrOdd() {
    let newNumber = 9;
    if(newNumber % 2 == 0) {
        console.log("this an even number");
    } else {
        console.log("this is an odd number");
    }
}
evenOrOdd();

// function rollerCosterRide() {
//     let givenHeight = prompt("waht is your height in inches");
//     let minHeight = 36;
//     if (givenHeight >= minHeight) {
//         console.log("you can ride roller coaster")
//     } else {
//         console.log("you can not ride roller coaster")
//     }
// }
// rollerCosterRide();

function chalkBoard() {
    for (let index = 0; index < 50; index++) {
        console.log("I will not come late at school"); 
    }
}
chalkBoard();

// while loop
// Initial inventory count
let inventory = 34;

// Function to prompt the user for input and handle the inventory updates
while (inventory > 0) {
    console.log(`We have ${inventory} items in inventory.`);
    
    // Prompt the user for the number of items they want to buy
    let purchase = parseInt(prompt(`How many would you like to buy?`), 10);
    
    // Check if the purchase amount is valid
    if (purchase <= inventory && purchase > 0) {
        inventory -= purchase;
        console.log(`Now we have ${inventory} left.`);
    } else if (purchase > inventory) {
        console.log(`There is not enough in inventory for that purchase.`);
    } else {
        console.log(`Invalid input. Please enter a positive number.`);
    }
    
    console.log(""); // Print a blank line for readability
}

console.log("All out!");