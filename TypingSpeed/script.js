const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var intervalGame;
var timerRunning = false;
var timer = [0,0,0,0];

function runTimer(){
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
    theTimer.innerHTML = currentTime;
    timer[3]++;
    
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor(timer[3]/100 - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function spellCheck(){
    let textEntered = testArea.value;
    let textOriginalMatch = originText.substring(0, textEntered.length);

    if(textEntered == originText){
        testWrapper.style.borderColor = "green";
        clearInterval(intervalGame);
    } else if(testArea.value == "") {
        testWrapper.style.borderColor = "gray";
    } else{
        if(textEntered == textOriginalMatch){
            testWrapper.style.borderColor = "blue";
        } else{
            testWrapper.style.borderColor = "red";
        }
    } 
}

function start(){
    let textEnteredLenght = testArea.value.length;
    //console.log(textEnteredLenght);
    if(textEnteredLenght === 0 && !timerRunning){
        timerRunning = true;
        intervalGame = setInterval(runTimer, 10);
    }
    console.log(textEnteredLenght);
}

function reset(){
    clearInterval(intervalGame);
    intervalGame = null;
    timer = [0,0,0,0];

    timerRunning = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

testArea.addEventListener('keypress', start, false);
testArea.addEventListener('keyup', spellCheck, false);
resetButton.addEventListener('click', reset, false);