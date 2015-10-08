
//////  CLOSURES   ///////

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
},
myPet = pet("Vivie");
   
myPet();                     // Returns "Vivie"


////

var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver


//////





//////    LEXICAL THIS     //////


function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();


//


var p = new Person();

function Person() {
  var self = this; // Some choose `that` instead of `self`. 
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}


//////


































//////

//  Structure of a while loop
while ( ) {
  // this is the loop
}

//  Example: loop that runs 10 times
var counter = 1;
while ( counter <= 10 ) {
  console.log(counter);
  counter += 1;
}


//////


let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}


//////



// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

    // This function is defined in the global scope
    function multiply() {
      
      return num1 * num2;
    }

    multiply(); // Returns 60


    // A nested function example
    function getScore () {
      
      var num1 = 2,
          num2 = 3;
      
      function add() {
        return name + " scored " + (num1 + num2);
      }
      
      return add();
    }

getScore(); // Returns "Chamahk scored 5"






//////



function foo(i) {
  if (i < 0)
    return;
  console.log('begin:' + i);
  foo(i - 1);
  console.log('end:' + i);
}
foo(3);








var addTeamName = function(){
  prompt("Please add a Team Name");
  teamNameArray.push();
};



var teamNameArray = [];
  if (!teamNameArray[0]) addTeamName();
  console.log('teamNameArray');














//////

// an object whose properties are objects

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);

//////





//////

// an object whose properties are strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);


//////











