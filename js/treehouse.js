


//// Register Event listeners
document.getElementById("greetingMessage").addEventListener("click", showGreeting);

function showGreeting() {
    document.getElementById("message").innerHTML = "YOU CLICKED ME!";
}
//

//// Create Arrays and global functions
var phrases = ['Walk like a duck', 'Eat soup', 'Play CD player', 'Duck quack'];
var blueTeamPlayers = ['Professor', 'Gilligan', 'Mary-Ann', 'Millionaire'];
var redTeamPlayers = ['Mario', 'Princess', 'Louigi', 'Toad'];
var blueTeam = ['Blue Team', 0];
var redTeam = ['Red Team', 0];
var activeTeam = [];
var score = [];
var roundCount = 1;







//// Simple prototype example
function Team(n, s, p) {
    this.name = n;
    this.score = s;
    this.players = p;
}

Team.prototype.logInfo = function() {
    console.log("I am:" , this.name);
}

Team.prototype.addPoint = function() {
    this.score++;
    console.log("Score:" , this.score);
}


var team1 = new Team("Team1", 0, 0);

var team2 = new Team("Team2", 0, 0);






//// Simple prototype example
function Player(n, r, s) {
    this.name = n;
    this.rank = r;
    this.score = s;
}

Player.prototype.logInfo = function() {
    console.log("I am:" , this.name);
}

Player.prototype.addPoint = function() {
    this.score++;
    console.log("Score:" , this.score);
}

Player.prototype.promote = function() {
    this.rank++;
    console.log("My new rank is:" , this.rank);
}

var fred = new Player("Fred", 199, 2999);

fred.logInfo();
fred.promote();
fred.addPoint();

//





//// Countdown timer - two global variables
var secondsRemaining;
var intervalHandle;
var successButton;

function resetPage() {
    document.getElementById("roundCount").innerHTML = roundCount += 1;
    


    if (roundCount % 2 == 0) {
        var activeTeam = "Red Team";
        document.getElementById("activeTeam").innerHTML = activeTeam;
        alert("Even Numberd roundCount:" + roundCount + "Red Team\'s turn.");

    } else {
        alert("Odd Numbered roundCount:" + roundCount + "Blue Team's turn!");
        var activeTeam = "Blue Team";
    }
    




    document.getElementById("time").innerHTML = secondsRemaining;
    document.getElementById("nextTurn").style.display = "block";
}

function nextTurn() {

    document.getElementById("startCountdown").style.display = "block";
    document.getElementById("successButton").style.display = "none";
    document.getElementById("nextTurn").style.display = "none";
}



function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");


    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;



        if (successButton === true) {
            alert("Please confirm your team has guessed correctly");
            // (if confirmed == true) blueTeam.score += 1
            Team.addPoint();
            

            document.getElementById("successButton").style.display = "none";
            clearInterval(intervalHandle);
            nextTurn();
        } else
        // stop if down to zero
        if (secondsRemaining === 0) {
            document.getElementById("successButton").style.display = "none";
            alert("Done!");
            clearInterval(intervalHandle);
            resetPage();
        }

    

    // subtract from seconds remaining
    secondsRemaining--;
}

function startCountdown() {

    document.getElementById("startCountdown").style.display = "none";
    document.getElementById("successButton").style.display = "block";
    document.getElementById("nextTurn").style.display = "none";

    // how many seconds?
    secondsRemaining = 5;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    
}