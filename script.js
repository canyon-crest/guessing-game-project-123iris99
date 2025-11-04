//time
date.textContent = time();

// global variables/constants

let score, answer, level, userName;
const levelArr = document.getElementsByName("level");
const scoreArr = [];


// var date = new Date();
// var dom = date.getDate();
// var dow = date.getDay();
// var month = date.getMonth();
// var year = date.getFullYear();
// var mins = date.getMinutes();
// var hour = date.getHours();
// var amPm = "a.m.";

// switch(dow)
// {
//     case 0: dow = "Sunday"; break;
//     case 1: dow = "Monday"; break;
//     case 2: dow = "Tuesday"; break;
//     case 3: dow = "Wednesday"; break;
//     case 4: dow = "Thursday"; break;
//     case 5: dow = "Friday"; break;
//     case 6: dow = "Saturday"; break;
// }

// switch(month)
// {
//     case 0: month = "January"; break;
//     case 1: month = "February"; break;
//     case 2: month = "March"; break;
//     case 3: month = "April"; break;
//     case 4: month = "May"; break;
//     case 5: month = "June"; break;
//     case 6: month = "July"; break;
//     case 7: month = "August"; break;
//     case 8: month = "September"; break;
//     case 9: month = "October"; break;
//     case 10: month = "November"; break;
//     case 11: month = "December"; break;
// }

// if(hour>=12){
//     hour = hour-12;
//     amPm = "p.m.";
// }

// if(hour == 0)
//     hour = 12;

// if(mins<10)
//     mins = "0"+mins;

// alert("Today is " + dow + "," + month + " " + dom + ", " + year + ". The time is " + hour + ":" + mins + " " + amPm);

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

////////////////////////////////////
document.getElementById("myBtn").addEventListener("click", stop);
let start = new Date().getTime();

function useTimer(){
    let stop = new Date().getTime();
    let time = (stop - start)/1000;
    document.getElementById("myTimer").innerHTML = time.toFixed(2);
}
let timer = setInterval(useTimer, 10);
let flag = true;
function stop(){
    if(flag){
        clearInterval(timer);
        myBtn.innerHTML = "Start";
    }
    else{
        timer = setInterval(useTimer, 10);
        myBtn.innerHTML = "Stop";
    }
    flag = !flag;
}

function play(){
    playBtn.disabled = true;
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
        if(score<=2){
            msg.textContent = "Correct! You guessed in " + score + " tries"+ ". Your score is good!";
        }
        else if (score<=4 && score>=3){
            msg.textContent = "Correct! You guessed in " + score + " tries" + ". Your score is okay";
        }
        else if (score>=5){
            msg.textContent = "Correct! You guessed in " + score + " tries" + ". Your score is bad";
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
}