// cache DOM
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const resultMessage = document.querySelector(".result p"); 
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const sissor_div = document.getElementById('s');

// function congo(winner){
//     console.log(winner);
// }

// function check(){
//     if(userScore==10)
//     return congo('u is winner');
//     if(compScore==10)
//     return congo('c');
//     return;
    
// }

function getCompChoice(){
    choice = ['r' , 's' , 'p'];
    const compChoice = choice[Math.floor(Math.random() * 3)];
    console.log(compChoice);
    return compChoice;
}

function convertToWord(choice){
    if(choice =='r') return "Rock";
    if(choice == 's') return "Scissor";
    return "Paper";
}

function win(userChoice , compChoice){
    // check();
    userScore++;
    userScore_span.innerHTML=userScore;
    resultMessage.innerHTML=convertToWord(userChoice) + " beats " + convertToWord(compChoice) + " You Win";
    document.getElementById(userChoice).classList.add('green-glow');
    const glow = () => document.getElementById(userChoice).classList.remove('green-glow');
    setTimeout(glow , 500);
}
function loose(userChoice , compChoice){
    // check();
    compScore++;
    compScore_span.innerHTML=compScore;
    resultMessage.innerHTML=convertToWord(userChoice) + " fails to " + convertToWord(compChoice) + " You Loose";
    document.getElementById(userChoice).classList.add('red-glow');
    const glow = () => document.getElementById(userChoice).classList.remove('red-glow');
    setTimeout(glow , 500);
}
function draw(userChoice , compChoice){
    // check();
    userScore_span.innerHTML=userScore;
    resultMessage.innerHTML=convertToWord(userChoice) + " same as " + convertToWord(compChoice) + " Draww";
    document.getElementById(userChoice).classList.add('grey-glow');
    const glow = () => document.getElementById(userChoice).classList.remove('grey-glow');
    setTimeout(glow , 500);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice , compChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            loose(userChoice , compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice , compChoice);
            break;
        default : alert("Error occured \n Try Again");   
    }
}

function main(){
    // check();
    rock_div.addEventListener('click' , ()=> game('r'));
    paper_div.addEventListener('click' , ()=> game('p'));
    sissor_div.addEventListener('click' ,()=> game('s'));
}

main();