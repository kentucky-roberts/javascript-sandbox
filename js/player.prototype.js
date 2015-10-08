// Simple prototype example

function Player(n, r, s) {
    this.name = n;
    this.rank = r;
    this.score = s;
}


Player.prototype.logInfo = function() {
    console.log("I am:" , this.name);
}


Player.prototype.promote = function() {
    this.rank++;
    console.log("My new rank is:" , this.rank);
}



var fred = new Player("Fred", 199, 2999);
fred.logInfo();
fred.promote();