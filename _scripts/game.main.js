//  Fire this page after main.loop.js  using a variable
//  Main loop has started, create Player, build Players array, create Team, add Players to Team1 and Team2



/*
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
*/


activePlayer();

        function getTeamPlayers() {

        }


        function getTeams() {
            this.team = team;
            team.name = "";
            team.score = [0];
            team.players = ['Bob', 'Jane', 'William', 'Darren'];

        }


// game flow = init -> prompt(How many players are playing this game?)

function Game() {


        countdownTime = 59,
        turnCount = 1,
        message = ["Default message abailable globally as game.message.  The message variable will begin at game and be changed/updated by game\'s child functions, depending on the currentState."];
        team1 = [0],
        team2 = [0],
        teams = [
            [0] = {"Team Name", 
        ],
        scoreboard = [0];


    function buildTeams() {
        var newTeamName = function(){
            var newPlayerName = prompt();
        }
    }
 
    function startGame() {

        var welcome = alert("Welcome to your new Charades game.  First we are going to add players to Team 1, then Team 2. Please click start button to begin. ");
         

        var createTream1Players = function() {

            var buiuldTeam1 = prompt("Please add players to Team 1.  Click the + button to add more players, when complete click continue button.");
            return Team1players;

            function addPlayersTeam1( Team1players ) {
                team1.add(Team1players);
            }



        }





        createTream1Players();



} // Game();


var newGame = game();









