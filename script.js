//time
date.textContent = time();

// global variables/constants

let score, answer, level, userName;
const levelArr = document.getElementsByName("level");
const scoreArr = [];

// var date = new DateTransfer();
// var dom = date.getDate();
// var dow = date.getDay();
// var month = date.getMonth();
// var year = date.getFullYear();
// var mins = date.getMinutes();
// var hour = date.getHourse();
// varamPm = "a.m.";

// if(hour>=12){
//     hour = hour-12;
//     amPm = "p.m.";
// }

// if(hour == 0)
//     hour = 12;

// if(mins<10)
//     mins = "0"+mins;

// alert("Today is " + dow + "," + month + " " + dom + ", " + year + ". The time is " + hour + ":" + mins + " " + ampPm);

// event listeners
playBtn.addEventListener("click", play);
guessBtn.addEventListener("click", makeGuess);

function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const myTime = "Time: " + hours + ":" + minutes + ":" + seconds
    document.getElementById('clock').textContent = myTime;
    }

    displayTime();
    setInterval(displayTime, 1000);

function time(){
    let d = new Date();
// concatenate date and time
    let str = "Date: " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()
    return str;
}

function play(){
    playBtn.disabled = true;
    guessBtn.disabled = false;
    guess.disabled = false;
    for(let i=0; i<levelArr.length; i++){
        levelArr[i].disabled = true;
        if(levelArr[i].checked){
            level = levelArr[i].value;
        }
    }
    answer = Math.floor(Math.random()*level)+1;
    userName = document.getElementById('messageInput').value;
        if (userName == ""){
            msg.textContent = "Please enter a name"
        }
        else{
    msg.textContent = "Hi " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! " + " Guess a number between 1-" + level;
    }
    guess.placeholder = answer;
    score = 0;
}

function makeGuess(){
    let userGuess = parseInt(guess.value);
    if(isNaN(userGuess) || userGuess < 1 || userGuess > level){
        msg.textContent = "INVALID, guess a number";
        return;
    }
    score++;
    if(userGuess<answer){
        msg.textContent = "Too low, guess again";
    }
    else if(userGuess>answer){
        msg.textContent = "Too high, guess again";
    }
    else{
        msg.textContent = "Correct! You guessed in " + score + " tries";
        reset();
        updateScore();
    }
}
function reset(){
    guessBtn.disabled = true;
    guess.value = "";
    guess.placeholder = "";
    guess.disabled = true;
    playBtn.disabled = false;
    for(let i=0; i<levelArr.length; i++){
        levelArr[i].disabled = false;
    }
}
function updateScore(){
 scoreArr.push(score); //adds current score to array of scores
    wins.textContent = "Total wins: " + scoreArr.length;
    let sum = 0;
    scoreArr.sort((a, b) => a - b); // sorts array in ascending order
    //leaderboard
    const lb = document.getElementsByName("leaderboard");

    for(let i=0; i<scoreArr.length; i++){
        sum += scoreArr[i];
        if(i<lb.length){
            lb[i].textContent = scoreArr[i];
        }
    }
    let avg = sum/scoreArr.length;
    avgScore.textContent = "Average Score: " + avg.toFixed(2);
}