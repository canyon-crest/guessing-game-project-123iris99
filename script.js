//time
date.textContent = time();

// global variables/constants

let score, answer, level, userName;
let timerInterval, startTime;

const levelArr = document.getElementsByName("level");
const scoreArr = [];
const timerArr = [];
const timerDisplay = document.getElementById('timer');
const avgTime = document.getElementById('avgTime');
const fastTime = document.getElementById('fastTime');
const giveUpBtn = document.getElementById('giveUpBtn');
const badgeList = document.getElementById('badgeList');
const badges = new Set();

// event listeners
playBtn.addEventListener("click", play);
guessBtn.addEventListener("click", makeGuess);
giveUpBtn.addEventListener('click', giveUp);


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
    const myTime = "Time: " + hours + ":" + minutes + ":" + seconds +" am"
    document.getElementById('clock').textContent = myTime;
    }
    else if(hours>=12 || hours<=23){
    const myTime = "Time: " + (hours-12) + ":" + minutes + ":" + seconds +" pm"
    document.getElementById('clock').textContent = myTime;
    }
    } 
    displayTime();
    setInterval(displayTime, 1000);

    function updateAverageTime() {
    const sum = timerArr.reduce((acc, t) => acc + t, 0);
    const avg = sum / timerArr.length;
    avgTime.textContent = "Average Time: " + avg.toFixed(2) + "s";

    // Optional: fastest time
    fastTime.textContent = "Fastest Time: " + Math.min(...timerArr) + ".00s";
}

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
playBtn.style.backgroundColor = 'green';
function play(){
    playBtn.style.backgroundColor = '';
    guessBtn.style.backgroundColor = 'green';
    giveUpBtn.style.backgroundColor = 'red';
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
            playBtn.style.backgroundColor = 'green';
    guessBtn.style.backgroundColor = '';
    giveUpBtn.style.backgroundColor = '';
    playBtn.disabled = false;
    messageInput.disabled = false;
    giveUpBtn.disabled = true;
    cb1.disabled = false;
    guessBtn.disabled = true;
    guess.disabled=true;
    for(let i=0; i<levelArr.length; i++){
        levelArr[i].disabled = false;
        if(levelArr[i].checked){
            level = levelArr[i].value;
    }
    }
    }
        else{
    msg.textContent = "Hi " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! " + " Guess a number between 1-" + level;
    guessBtn.disabled = false;
    }
    guess.placeholder = answer;
    score = 0;
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
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


function makeGuess(){
    let userGuess = parseInt(guess.value);
    if(isNaN(userGuess) || userGuess < 1 || userGuess > level){
        msg.textContent = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + ", guess a number between 1-" + level;
        return;
    }
    score++;
    if(userGuess<answer){
        msg.textContent = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + ", too low, guess again";
        guessBtn.style.backgroundColor = 'green';
        giveUpBtn.style.backgroundColor = 'red';
    }
    else if(userGuess>answer){
        msg.textContent = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + ", too high, guess again";
        guessBtn.style.backgroundColor = 'green';
        giveUpBtn.style.backgroundColor = 'red';
    }
    else {
    // Player guessed correctly
    clearInterval(timerInterval);
    const finalTime = Math.floor((Date.now() - startTime) / 1000);
    timerArr.push(finalTime); // add this game's time
    updateAverageTime();
    
    if(score==1){
        msg.textContent = "Correct " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! You guessed in " + score + " try. Your score is good!";
    }
    else if(score <= 2){
        msg.textContent = "Correct " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! You guessed in " + score + " tries. Your score is good!";
    } else if(score <= 4){
        msg.textContent = "Correct " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! You guessed in " + score + " tries. Your score is okay.";
    } else {
        msg.textContent = "Correct " + userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + "! You guessed in " + score + " tries. Your score is bad.";
    }

    playBtn.style.backgroundColor = 'green';
    reset();
    updateScore();
}
const myHint = document.getElementsByName("cb");
    for(let i=0; i<myHint.length; i++){
        if(myHint[i].checked){
            const distance = Math.abs(userGuess - answer);
updateColorMeter(distance);

if(distance == 0){
    msg.textContent = msg.textContent;
}
else if(distance == 1){
    msg.textContent += ". Your answer is very hot";
} else if(distance <= 3){
    msg.textContent += ". Your answer is hot";
} else if(distance <= 5){
    msg.textContent += ". Your answer is warm";
} else if(distance <= 7){
    msg.textContent += ". Your answer is lukewarm";
} else{
    msg.textContent += ". Your answer is cold";
}
                }
            }
            if(score === 1){
    unlockBadge("🎯 Perfect Score");
} else if(score <= 2){
    unlockBadge("👍 Good Score");
}

// Speed-based badges
if(finalTime <= 5){ // e.g., under 5 seconds
    unlockBadge("⚡ Speedster");
} else if(finalTime <= 15){
    unlockBadge("⏱ Quick Thinker");
}
    return;

    }

    function updateColorMeter(distance) {
    const meter = document.getElementById('colorMeter');

    if(distance === 0){
        meter.style.backgroundColor = '#D4AF37'; // correct
    } else if(distance === 1){
        meter.style.backgroundColor = '#D1001F'; // very hot
    } else if(distance <= 3){
        meter.style.backgroundColor = '#FF6701'; // hot
    } else if(distance <= 5){
        meter.style.backgroundColor = '#FFF380'; // warm
    } else if(distance <= 7){
        meter.style.backgroundColor = '#8EC3E6'; // lukewarm
    } else {
        meter.style.backgroundColor = '#3A5D9C'; // cold
    }
}
    
    function giveUp() {
    clearInterval(timerInterval); // stop the timer

    // Set score to max (the level), indicating "gave up"
    score = parseInt(level); // ensure it's a number

    msg.textContent = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase() + ", you gave up! The correct answer was " + answer + ". Your score is " + score;

    // Update score and reset buttons
    updateScore();
    reset();
    playBtn.style.backgroundColor = 'green';
    giveUpBtn.disabled = true;
    guessBtn.disabled = true;

    if(score === parseInt(level)){
    unlockBadge("🤷‍♂️ Quitter"); // could be fun/encouraging
}
}

function reset(){

const giveUpBtn = document.getElementById('giveUpBtn');
    guessBtn.style.backgroundColor = '';
    giveUpBtn.style.backgroundColor = '';
    guess.value = "";
    guess.placeholder = "";
    guess.disabled = false;
    giveUpBtn.disabled = true;
    guessBtn.disabled = true;
    playBtn.disabled = false;
    messageInput.disabled = false;
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
    avgScore.textContent = "Average Score: " + avg.toFixed(2);

    if(scoreArr.length >= 5){
    unlockBadge("🏆 5 Wins Streak");
}
if(avgScore.textContent < 2){
    unlockBadge("🥇 Consistent Player");
}
}

function unlockBadge(name) {
    if(!badges.has(name)) {
        badges.add(name);
        const li = document.createElement('li');
        li.textContent = name;
        badgeList.appendChild(li);
    }
}

    
///add color meter (hot-to-cold)
///achievement system (badges, awards)
///guess history log
///Power-Ups/Special Abilities: Introduce limited-use power-ups that can reveal information about the number or grant extra guesses.