//JS Dates
const d = new Date();//by default javascript is using toString() method to display
console.log(d);
console.log(d.setFullYear(2020));
const ds = new Date("2022-03-22");
console.log(ds);
const dt = new Date(90, 6, 31, 11, 31, 55, 0)//7 numbers specify year, month, day, hour, minute, second, and millisecond
console.log(dt);
const mt = new Date(86400000);
console.log(mt);

//toDateString() method
const tm = new Date();
console.log(tm.toDateString());
//toUTCString() method
const ut = new Date();
console.log(ut.toUTCString());
console.log(ut.toISOString());
const msec = Date.parse("February 21, 2060");
console.log(msec);
const nmsec = new Date(msec);
console.log(nmsec);

//getFullYear method
const gf = new Date("2025-05-19");
console.log(gf.getFullYear());//getYear() is deprecated. Do not use it!
console.log(gf.getMonth());//getMonth() method
console.log(gf.getDate());
console.log(gf.getHours());
console.log(gf.getMinutes());
console.log(gf.getSeconds());
console.log(gf.getMilliseconds());
console.log(gf.getDay());

//getMonth() method
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const atm = new Date();
let month = months[atm.getMonth()];
console.log(month);

const setTime = new Date();
setTime.setFullYear(2020);
setTime.setMonth(11);
setTime.setDate(13);
setTime.setHours(12);
setTime.setMinutes(35);
setTime.setSeconds(44);
console.log("set time : ", setTime);

//compare dates
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);
