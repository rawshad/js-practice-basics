function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  employee.prototype.salary = 2000;
  
  const fred = new employee("Fred Flintstone", "Caveman", 1970);
  document.getElementById("demo").innerHTML = fred.salary;

function Person (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
}

const myFather = new Person ("Mesbah", "Uddin", "black");
const myMother = new Person ("Shahina", "Akhter", "brown");

Person.prototype.nationality = "Bangladeshi";

document.getElementById("demo1").innerHTML =
"My father Mr." + " " + myFather.firstName + " "+ myFather.lastName + " " + "is" + " " + myFather.nationality + "<br>" +
"My mother Mst." + " " + myMother.firstName + " "+ myMother.lastName + " " + "is" + " " + myMother.nationality + "<br>"
