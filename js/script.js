var secondsRemaining = 5;
var intervalHandle;
 

var myGotItButton = document.getElementById("gotItButton");
var myStartButton = document.getElementById("startButton");
var myPauseButton = document.getElementById("pauseButton");
var myNextHandButton = document.getElementById("nextHandButton");


function prepareEventHandelers() {
    

    myStartButton.onclick = function() {
        myStartButton.style.display = "none";
        myPauseButton.style.display = "block";
        myResumeButton.style.display = "none";
            
        startCountdown();
    }

    myGotItButton.onclick = function() {
        myStartButton.style.display = "none";
        myGotItButton.style.display = "block";
        clearInterval(intervalHandle);

    }



}

function resetPage() {
    myStartButton.style.display = "block";
    myNextHandButton.style.display = "none";
    myGotItButton.style.display = "none";
    
    intervalHandle = setInterval(tick, 1000);
    secondsRemaining == 59;
    tick();
    
}

function tick() {
    var timeDisplay = document.getElementById("time");
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    var message = min + ":" + sec;
    timeDisplay.innerHTML = message;





function nextTurn() {
}

function startCountdown() {
     var minutes = document.getElementById("time").value;
     secondsRemaining =  minutes * 60;
     intervalHandle = setInterval(tick, 1000);
}







window.onload = function() {
prepareEventHandelers();
};