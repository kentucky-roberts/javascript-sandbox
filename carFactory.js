// ManagerFactory uses PersonFactory for processing
// we will know them as manager.person




//  Person Factory
function Manager(student, skill, degree) {
  this.student = student;
  this.skill = skill;
  this.degree = degree;

}
//  run rand and ken through the person factory.
var managerRand = new Manager(rand, "Racecar arrow-dynamics", "Management Degree");
var managerKen = new Manager(ken, "Team Leadership", "Management Degree");
// vars now available ken.age rand.age ...



//  Person Factory
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
//  run rand and ken through the person factory.
var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
// added leo and beth who are not students
var leo = new Person("Leo McNerd", 24, "M");
var beth = new Person("Beth Dodo", 12, "F");
// vars now available ken.age rand.age ...

//////////////var car1 = new Car("Eagle", "Talon TSi", 1993, rand);


function Player(playerName, initialScore){
    this.name = playerName;
    this.initialScore = initialScore;
    this.score = initialScore;
    this.team = "Free Agent";
    this.isActive = false;
}


// make a Car factory.  tell it to be teady for make,model,year vars.
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  // ... added owner so Car Factory
  this.owner = owner;
}
// now run our custom data through our Car Factory

var car1 = new Car("Eagle", "Talon TSi", 1993, leo);
var car2 = new Car("Nissan", "300ZX", 1992, beth);
var car3 = new Car("Toyota", "Tacoma", 2014, ken);
var car4 = new Car("Toyota", "Turcel", 1995, rand);
var car5 = new Car("Toyota", "Supra", 1999, ken);








var racers = [car1.owner, car2.owner, car3.owner, car4.owner, car5.owner];

var managers = [managerRand.student, managerKen.student];


// ToyotaTeam Owns all cars from factory.
// the cars are added manually by me now but
// create function to  Manager later
function ToyotaTeam( racers, managers ) {
  this.racers = racers;
  this.managers = managers;
}
var team1 = new ToyotaTeam(racers, managers);

console.log(team1.racers[1]);





/////               to do

//  var racers -> I want racers to have racers.driverName, racers.raceCar, ...
//
//  people - cars :: managers - racers
//  so build a RaceTeamFactory



//      to do == build a RaceTeamFactory
