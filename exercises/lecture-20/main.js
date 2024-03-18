// THE TASK 1 SECTION
const person = {
  name: "Oksana",
  age: 22,
};
console.log(person); // checks if it reads the properties -> +
console.log("Name is:", person.name);
console.log("Age is:", person.age);
// THE TASK 1 SECTION

// THE TASK 2 SECTION
function getObjectFromString(obj) {
  obj.name = {};
  obj.name.firstName = "Oksana";
  obj.name.lastName = "Kolisnyk";
  return console.log(obj);
}
getObjectFromString(person);
// THE TASK 2 SECTION

// THE TASK 3/4 SECTION
const anotherPerson = {
  name: {
    firstName: "Oksanka",
    lastName: "Kolisnyk",
  },
  age: 20,
  bio: function () {
    return console.log(
      "Name is:",
      this.name.firstName,
      this.name.lastName,
      ",",
      "Age is:",
      this.age
    );
  },
  introduceSelf: function () {
    return console.log("Hi! I'm", this.name.firstName);
  },
};
anotherPerson.bio();
anotherPerson.introduceSelf();
// THE TASK 3/4 SECTION

// THE TASK 5 SECTION
function createPerson(name) {
  return {
    name: name,
    introduceSelf: function () {
      return console.log("Hi! I'm", this.name);
    },
  };
}

let firstPerson = createPerson("Oksanka:)");
let secondPerson = createPerson("Ruslan:)");

firstPerson.introduceSelf();
secondPerson.introduceSelf();
// THE TASK 5 SECTION

// THE TASK 6 SECTION
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log("Hi! I'm", this.name);
  };
}
let mary = new Person("Mary");
let tom = new Person("Tom");

mary.introduceSelf();
tom.introduceSelf();

//check for the "prop" property
if ("prop" in mary) {
  console.log("I check if there's a prop in Mary....... Yeah, it is:)");
} else {
  console.log("I check if there's a 'prop' in Mary....... No, it isn't:(");
}
// THE TASK 6 SECTION

// THE TASK 7 SECTION
const DirtyMartini = {
  gin: 6,
  vermouth: 1,
  olive_brine: 1,
  olives: 4,
  quotient: 28.4131,
  excuse_my_french() {
    console.log("ingrédients:");
    console.log(`${this.gin * this.quotient}  ml de gin`);
    console.log(`${this.vermouth} trait de vermouth sec (0.0351951ml)`);
    console.log(`${this.olive_brine * this.quotient} ml de saumure du pot d'olive`);
    console.log(`${this.olives} olives vertes farcies`);
  },
  english_please() {
    console.log("ingredients:");
    console.log(`${this.gin} fluid ounces gin`);
    console.log(`${this.vermouth} dash dry vermouth (0.0351951ml)`);
    console.log(`${this.olive_brine} fluid ounce brine from olive jar`);
    console.log(`${this.olives} stuffed green olives`);
  },
};

// Method calls
console.log("\nCalling excuse_my_french():");
DirtyMartini.excuse_my_french();
console.log("\nCalling english_please():");
DirtyMartini.english_please();
// THE TASK 7 SECTION