//time
date.textContent = time();

// global variables/constants

let score, answer, level, userName;
let timerInterval, startTime;
let bestTime = localStorage.getItem('bestGuessingTime') || 'N/A'; // Store/retrieve best time
document.getElementById('best-time').textContent = bestTime;
const levelArr = document.getElementsByName("level");
const scoreArr = [];
const timerArr = [];
const timerDisplay = document.getElementById('timer');

// event listeners
playBtn.addEventListener("click", play);
guessBtn.addEventListener("click", makeGuess);


function displayTime() { //date
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    if(hours==12){
    const myTime = "Time: " + hours + ":" + minutes + ":" + seconds +" pm"
    document.getElementById('clock').textContent = myTime;
    }
    else if(hours==0){
    const myTime = "Time: 12" + ":" + minutes + ":" + seconds +" am"
    document.getElementById('clock').textContent = myTime;
    }
    else if(hours<12 || hours>=1){
    const myTime = "Time: " + (hours-12) + ":" + minutes + ":" + seconds +" pm"
    document.getElementById('clock').textContent = myTime;
    }
    else if(hours>=12 && hours<=23){
    const myTime = "Time: " + hours + ":" + minutes + ":" + seconds +" am"
    document.getElementById('clock').textContent = myTime;
    }
    }
    displayTime();
    setInterval(displayTime, 1000);

////////////////////////////////////////

function time(){ //time
    let d = new Date();
    if((d.getMonth() + 1)==1){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "January " + d.getDate() + "th, " + d.getFullYear()
    return str;
    }
        else if((d.getDate().length-1)==1){
    let str = "Date: " + "January " + d.getDate() + "st, " + d.getFullYear()
    return str;
    }
        else if((d.getDate().length-1)==2){
    let str = "Date: " + "January " + d.getDate() + "nd, " + d.getFullYear()
    return str;
    }
        else if((d.getDate().length-1)==3){
    let str = "Date: " + "January " + d.getDate() + "rd, " + d.getFullYear()
    return str;
    }
    }
    else if((d.getMonth() + 1)==2){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "February " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "February " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "February " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "February " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==3){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "March " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "March " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "March " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "March " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==4){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "April " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "April " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "April " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "April " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==5){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "May " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "May " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "May " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "May " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==6){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "June " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "June " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "June " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "June " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==7){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "July " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "July " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "July " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "July " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==8){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "August " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "August " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "August " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "August " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==9){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "September " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "September " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "September " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "September " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==10){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "October " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "October " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "October " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "October " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==11){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "November " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "November " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "November " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "November " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
    else if((d.getMonth() + 1)==12){
        if((d.getDate())>=4 && (d.getDate())<=20){
    let str = "Date: " + "December " + d.getDate() + "th, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
    let str = "Date: " + "December " + d.getDate() + "st, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==2 || d.getDate()==22){
    let str = "Date: " + "December " + d.getDate() + "nd, " + d.getFullYear();
    return str;
    }
        else if(d.getDate()==3 || d.getDate()==23){
    let str = "Date: " + "December " + d.getDate() + "rd, " + d.getFullYear();
    return str;
    }
    }
}

function play(){
    playBtn.disabled = true;
    giveUpBtn.disabled = false;
    cb1.disabled = true;
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
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

const giveUpButton = document.getElementById('giveUpBtn');
const gameStatus = document.getElementById('gameStatus');
giveUpButton.addEventListener('click', giveUpGame)

function giveUpGame() {
    msg.textContent = "Game Over! The answer was: " + answer;
    giveUpButton.disabled = true;
    if(msg.textContent = "Game Over! The answer was: " + answer){
        playBtn.disabled = false;
    giveUpBtn.disabled = true;
    cb1.disabled = false;
    guessBtn.disabled = true;
    guess.disabled = true;
        for(let i=0; i<levelArr.length; i++){
        levelArr[i].disabled = false;
        clearInterval(timerInterval);
        const finalTime = Math.floor((Date.now() - startTime) / 1000);
    }
    }
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `${elapsedTime}s`;
}

const finalTime = Math.floor((Date.now() - startTime) / 1000);
function myTimer(){
    timerArr.push(finalTime);
    timerArr.sort((a, b) => a - b);
    fastTime.textContent = "Fastest Time: " + timerArr[0];
}


////////////////////////////////////
// document.getElementById("playBtn").addEventListener("click", stop);
// let start = new Date().getTime();

// function useTimer(){
//     let stop = new Date().getTime();
//     let time = (stop - start)/1000;
//     document.getElementById("myTimer").innerHTML = time.toFixed(2);
// }
// let timer = setInterval(useTimer, 10);
// function stop(){
//     while()
//         if(playBtn.disabled=true){
//             timer = setInterval(useTimer, 10);
//             document.getElementById("myTimer").innerHTML = "00:00:00"
//         }

//     else{
//         clearInterval(timer);
//         document.getElementById("myTimer").innerHTML = time.toFixed(2);
//     }
// }

/////////////////////////

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
        if(score<=2){
            msg.textContent = "Correct! You guessed in " + score + " tries"+ ". Your score is good!";
            clearInterval(timerInterval);
        const finalTime = Math.floor((Date.now() - startTime) / 1000);
        }
        else if (score<=4 && score>=3){
            msg.textContent = "Correct! You guessed in " + score + " tries" + ". Your score is okay";
            clearInterval(timerInterval);
        const finalTime = Math.floor((Date.now() - startTime) / 1000);
        }
        else if (score>=5){
            msg.textContent = "Correct! You guessed in " + score + " tries" + ". Your score is bad";
            clearInterval(timerInterval);
        const finalTime = Math.floor((Date.now() - startTime) / 1000);
    
        }
        reset();
        updateScore();

    }
    const myHint = document.getElementsByName("cb");
    for(let i=0; i<myHint.length; i++){
        if(myHint[i].checked){
            if(Math.abs(userGuess-answer)==1){
            msg.textContent += ". Your answer is very hot";
            }
            else if(Math.abs(userGuess-answer)==2 || Math.abs(userGuess-answer)==3){
            msg.textContent += ". Your answer is hot";
            }
            else if(Math.abs(userGuess-answer)==4 || Math.abs(userGuess-answer)==5){
            msg.textContent += ". Your answer is warm";
            }
            else if(Math.abs(userGuess-answer)==6 || Math.abs(userGuess-answer)==7){
            msg.textContent += ". Your answer is lukewarm";
            }
            else{
                if(answer!=userGuess){
            msg.textContent += ". Your answer is cold";
                }
            }
    return;
    }
    else{
        msg.textContent = msg.textContent;
    }
    }
    }

function reset(){
    guessBtn.disabled = true;
    guess.value = "";
    guess.placeholder = "";
    guess.disabled = true;
    playBtn.disabled = false;
    giveUpBtn.disabled = false;
    cb1.disabled = false;
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
    if(msg.textContent = "Game Over! The answer was: " + answer){
    avgScore.textContent = "Average Score: " + Math.avg(avg + level);
}
}
    



// //time
// date.textContent = time();

// // global variables/constants

// let score, answer, level, userName;
// // let timerInterval, startTime;
// const levelArr = document.getElementsByName("level");
// const scoreArr = [];
// const currentTimeElement = document.getElementById('currentTime');
// const fastestTimeElement = document.getElementById('fastestTime');
// let startTime;
// let timerInterval;
// let fastestTime = localStorage.getItem('fastestTime') || null; // Load fastest time from local storage
// // const timerDisplay = document.getElementById('timer');

// // event listeners
// playBtn.addEventListener("click", play);
// guessBtn.addEventListener("click", makeGuess);


// function displayTime() { //date
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     if(hours==12){
//     const myTime = "Time: " + hours + ":" + minutes + ":" + seconds +" pm"
//     document.getElementById('clock').textContent = myTime;
//     }
//     else if(hours==0){
//     const myTime = "Time: 12" + ":" + minutes + ":" + seconds +" am"
//     document.getElementById('clock').textContent = myTime;
//     }
//     else if(hours<12 || hours>=1){
//     const myTime = "Time: " + (hours-12) + ":" + minutes + ":" + seconds +" pm"
//     document.getElementById('clock').textContent = myTime;
//     }
//     else if(hours>=12 && hours<=23){
//     const myTime = "Time: " + hours + ":" + minutes + ":" + seconds +" am"
//     document.getElementById('clock').textContent = myTime;
//     }
//     }
//     displayTime();
//     setInterval(displayTime, 1000);

// ////////////////////////////////////////

// function time(){ //time
//     let d = new Date();
//     if((d.getMonth() + 1)==1){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "January " + d.getDate() + "th, " + d.getFullYear()
//     return str;
//     }
//         else if((d.getDate().length-1)==1){
//     let str = "Date: " + "January " + d.getDate() + "st, " + d.getFullYear()
//     return str;
//     }
//         else if((d.getDate().length-1)==2){
//     let str = "Date: " + "January " + d.getDate() + "nd, " + d.getFullYear()
//     return str;
//     }
//         else if((d.getDate().length-1)==3){
//     let str = "Date: " + "January " + d.getDate() + "rd, " + d.getFullYear()
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==2){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "February " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "February " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "February " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "February " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==3){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "March " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "March " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "March " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "March " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==4){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "April " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "April " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "April " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "April " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==5){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "May " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "May " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "May " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "May " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==6){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "June " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "June " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "June " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "June " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==7){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "July " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "July " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "July " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "July " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==8){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "August " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "August " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "August " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "August " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==9){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "September " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "September " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "September " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "September " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==10){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "October " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "October " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "October " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "October " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==11){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "November " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "November " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "November " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "November " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
//     else if((d.getMonth() + 1)==12){
//         if((d.getDate())>=4 && (d.getDate())<=20){
//     let str = "Date: " + "December " + d.getDate() + "th, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==1 || d.getDate()==21 || d.getDate()==31){
//     let str = "Date: " + "December " + d.getDate() + "st, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==2 || d.getDate()==22){
//     let str = "Date: " + "December " + d.getDate() + "nd, " + d.getFullYear();
//     return str;
//     }
//         else if(d.getDate()==3 || d.getDate()==23){
//     let str = "Date: " + "December " + d.getDate() + "rd, " + d.getFullYear();
//     return str;
//     }
//     }
// }

// function play(){
//     playBtn.disabled = true;
//     giveUpBtn.disabled = false;
//     cb1.disabled = true;
//     guessBtn.disabled = false;
//     guess.disabled = false;
//     for(let i=0; i<levelArr.length; i++){
//         levelArr[i].disabled = true;
//         if(levelArr[i].checked){
//             level = levelArr[i].value;
//         }
//     }
//     answer = Math.floor(Math.random()*level)+1;
//     userName = document.getElementById('messageInput').value;
//         if (userName == ""){
//             msg.textContent = "Please enter a name"
//         }
//         else{
//     msg.textContent = "Hi " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! " + " Guess a number between 1-" + level;
//     }
//     guess.placeholder = answer;
//     score = 0;
//      startTime = Date.now();
//     startTimer();
//     displayFastestTime();
//     // startTime = Date.now();
//     // clearInterval(timerInterval);
//     // timerInterval = setInterval(updateTimer, 1000);
// }

// const giveUpButton = document.getElementById('giveUpBtn');
// const gameStatus = document.getElementById('gameStatus');
// giveUpButton.addEventListener('click', giveUpGame)

// function giveUpGame() {
//     msg.textContent = "Game Over! The answer was: " + answer;
//     giveUpButton.disabled = true;
//     if(msg.textContent = "Game Over! The answer was: " + answer){
//         playBtn.disabled = false;
//     giveUpBtn.disabled = true;
//     cb1.disabled = false;
//     guessBtn.disabled = true;
//     guess.disabled = true;
//         for(let i=0; i<levelArr.length; i++){
//         levelArr[i].disabled = false;
//     }
//     }
// }


// function startTimer() {
//     clearInterval(timerInterval); // Clear any existing timer
//     timerInterval = setInterval(() => {
//         const elapsedTime = (Date.now() - startTime) / 1000;
//         currentTimeElement.textContent = elapsedTime.toFixed(2);
//     }, 100);
// }

// function stopTimer() {
//     clearInterval(timerInterval);
// }

// function displayFastestTime() {
//     if (fastestTime) {
//         fastestTimeElement.textContent = parseFloat(fastestTime).toFixed(2) + ' seconds';
//     } else {
//         fastestTimeElement.textContent = 'N/A';
//     }
// }

// // function updateTimer() {
// //     const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
// //     timerDisplay.textContent = `${elapsedTime}s`;
// // }


// ////////////////////////////////////
// // document.getElementById("playBtn").addEventListener("click", stop);
// // let start = new Date().getTime();

// // function useTimer(){
// //     let stop = new Date().getTime();
// //     let time = (stop - start)/1000;
// //     document.getElementById("myTimer").innerHTML = time.toFixed(2);
// // }
// // let timer = setInterval(useTimer, 10);
// // function stop(){
// //     while()
// //         if(playBtn.disabled=true){
// //             timer = setInterval(useTimer, 10);
// //             document.getElementById("myTimer").innerHTML = "00:00:00"
// //         }

// //     else{
// //         clearInterval(timer);
// //         document.getElementById("myTimer").innerHTML = time.toFixed(2);
// //     }
// // }

// /////////////////////////

// function makeGuess(){
//     let userGuess = parseInt(guess.value);
//     if(isNaN(userGuess) || userGuess < 1 || userGuess > level){
//         msg.textContent = "INVALID, guess a number";
//         return;
//     }
//     score++;
//     if(userGuess<answer){
//         msg.textContent = "Too low, guess again";
//     }
//     else if(userGuess>answer){
//         msg.textContent = "Too high, guess again";
//     }
//     else{
//         const finalTime = (Date.now() - startTime) / 1000;
//         if (!fastestTime || finalTime < parseFloat(fastestTime)) {
//             fastestTime = finalTime.toString();
//             localStorage.setItem('fastestTime', fastestTime);
//             displayFastestTime();
//         if(score<=2){
//             msg.textContent = "Correct! You guessed in " + score + " tries"+ ". Your score is good!";
//         //     clearInterval(timerInterval);
//         // const finalTime = Math.floor((Date.now() - startTime) / 1000);
//         }
//         else if (score<=4 && score>=3){
//             msg.textContent = "Correct! You guessed in " + score + " tries" + ". Your score is okay";
//         //     clearInterval(timerInterval);
//         // const finalTime = Math.floor((Date.now() - startTime) / 1000);
//         }
//         else if (score>=5){
//             msg.textContent = "Correct! You guessed in " + score + " tries" + ". Your score is bad";
//         //     clearInterval(timerInterval);
//         // const finalTime = Math.floor((Date.now() - startTime) / 1000);
//         }
//         reset();
//         updateScore();

//     }
//     const myHint = document.getElementsByName("cb");
//     for(let i=0; i<myHint.length; i++){
//         if(myHint[i].checked){
//             if(Math.abs(userGuess-answer)==1){
//             msg.textContent += ". Your answer is very hot";
//             }
//             else if(Math.abs(userGuess-answer)==2 || Math.abs(userGuess-answer)==3){
//             msg.textContent += ". Your answer is hot";
//             }
//             else if(Math.abs(userGuess-answer)==4 || Math.abs(userGuess-answer)==5){
//             msg.textContent += ". Your answer is warm";
//             }
//             else if(Math.abs(userGuess-answer)==6 || Math.abs(userGuess-answer)==7){
//             msg.textContent += ". Your answer is lukewarm";
//             }
//             else{
//                 if(answer!=userGuess){
//             msg.textContent += ". Your answer is cold";
//                 }
//             }
//     return;
//     }
//     else{
//         msg.textContent = msg.textContent;
//     }
//     }
//     }

// function reset(){
//     guessBtn.disabled = true;
//     guess.value = "";
//     guess.placeholder = "";
//     guess.disabled = true;
//     playBtn.disabled = false;
//     giveUpBtn.disabled = false;
//     cb1.disabled = false;
//     for(let i=0; i<levelArr.length; i++){
//         levelArr[i].disabled = false;
//     }
// }
// function updateScore(){
//  scoreArr.push(score); //adds current score to array of scores
//     wins.textContent = "Total wins: " + scoreArr.length;
//     let sum = 0;
//     scoreArr.sort((a, b) => a - b); // sorts array in ascending order
//     //leaderboard
//     const lb = document.getElementsByName("leaderboard");

//     for(let i=0; i<scoreArr.length; i++){
//         sum += scoreArr[i];
//         if(i<lb.length){
//             lb[i].textContent = scoreArr[i];
//         }
//     }
//     let avg = sum/scoreArr.length;
//     if(msg.textContent = "Game Over! The answer was: " + answer){
//     avgScore.textContent = "Average Score: " + Math.avg(avg + level);
// }
// }
// }