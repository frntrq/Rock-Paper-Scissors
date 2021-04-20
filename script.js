const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameBox = document.querySelector('#game-box');
const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector('#computer-score');
let userScore = 0;
let computerScore = 0;

// Event Listeners

rock.addEventListener('click', e => select(e.target.innerText));
paper.addEventListener('click', e => select(e.target.innerText));
scissors.addEventListener('click', e => select(e.target.innerText));

// functions
function select(option) {
    gameBox.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.style.color = 'green'
    h3.style.backgroundImage = `url(assets/${option}.png)`;
    h3.innerText = option;
    gameBox.appendChild(h3);
    computerSelect();
}

function computerSelect() {
    let randomNo = Math.floor((Math.random()*10)+2);
    let computerChoice = randomNo <= 3 ? 'Rock' : randomNo <= 7 ? 'Paper' : 'Scissors';
    const h3 = document.createElement('h3');
    h3.style.color = 'cornflowerblue'
    h3.style.backgroundImage = `url(assets/${computerChoice}.png)`;
    h3.innerText = computerChoice;
    gameBox.appendChild(h3);
    compare();
}

function compare() {
    let userChoice = document.querySelectorAll('h3')[0].innerText;
    let computerChoice = document.querySelectorAll('h3')[1].innerText;
    const h2 = document.createElement('h2');
    h2.style.textAlign = 'center';
    
    userChoice === 'Rock' && computerChoice === 'Rock' ? h2.innerText='Draw' :
    userChoice === 'Rock' && computerChoice === 'Paper' ? h2.innerText='You Lose' :
    userChoice === 'Rock' && computerChoice === 'Scissors' ? h2.innerText='You Win' :
    userChoice === 'Paper' && computerChoice === 'Rock' ? h2.innerText='You Win' :
    userChoice === 'Paper' && computerChoice === 'Paper' ? h2.innerText='Draw' :
    userChoice === 'Paper' && computerChoice === 'Scissors' ? h2.innerText='You Lose' :
    userChoice === 'Scissors' && computerChoice === 'Rock' ? h2.innerText='You Lose' :
    userChoice === 'Scissors' && computerChoice === 'Paper' ? h2.innerText='You Win' :
    userChoice === 'Scissors' && computerChoice === 'Scissors' ? h2.innerText='Draw' :
    h2.innerText="Something's wrong I can feel it.";

    if(h2.innerText==='You Win') {
        userScore++;
        h2.style.color = 'green';
    } else if(h2.innerText==='You Lose') {
        computerScore++;
        h2.style.color = 'red';
    } else {
        h2.style.color = 'cornflowerblue';
    }

    // h2.innerText==='You Win' ? h2.style.color = 'green' :
    // h2.innerText==='You Lose' ? h2.style.color = 'red' :
    // h2.innerText==='Draw' ? h2.style.color = 'cornflowerblue' :
    // h2.style.color = 'black';

    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
    gameBox.appendChild(h2);
}