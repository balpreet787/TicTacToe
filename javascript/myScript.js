const gameBoard = document.querySelector(".game-board");
const board = document.querySelector(".board");
const playerOneScore = document.querySelector(".score.one span");
const playerTwoScore = document.querySelector(".score.two span");
const restart = document.querySelector(".restart");
const result = document.querySelectorAll(".result");
const submitPlayerOne = document.querySelector(".submit.playerOne");
const submitPlayerTwo = document.querySelector(".submit.playerTwo");
const usernameOne = document.querySelector(".usernameOne");
const usernameTwo = document.querySelector(".usernameTwo");
const playerOneName = document.querySelector(".playerOneName");
const playerTwoName = document.querySelector(".playerTwoName");


let box = [];
let turn = 0;
for (let i =0; i<=8; i++){
    box.push(document.createElement("div"));
    box[i].classList.add("box",(i+1));
    board.appendChild(box[i]);
    twoPlayerGame(box[i])
}

//create player factory function
const Player = (username, submit, playerName)=>{
    let score = 0;
    const addScore = () => score++;
    const getScore = () => score;
    const getPlayerName = () => {
        submit.addEventListener('click', ()=>{
            if (username.value != ""){
                playerName.textContent = username.value + ":";
            }
        });
    };

    return {getScore, addScore, getPlayerName};
};

playerOne = Player(usernameOne, submitPlayerOne, playerOneName);
playerTwo = Player(usernameTwo, submitPlayerTwo, playerTwoName);
playerOne.getPlayerName();
playerTwo.getPlayerName();
// add a function so two players can play the game 
function twoPlayerGame(square){
    square.addEventListener('click',()=>{
        if (square.textContent === "X"){
            square.textContent = "X";
        }
        else if(square.textContent === "O"){
            square.textContent = "O";
        }
        else if (turn === 0){
            square.textContent = "X";
            turn = 1;
        }
        else {
            square.textContent = "O";
            turn = 0;
    }
    game();
    });
}

// function to check who wins the game
function game(){
    if ((box[0].textContent ==="X" && box[1].textContent ==="X" && box[2].textContent ==="X") ||
     (box[3].textContent ==="X" && box[4].textContent ==="X" && box[5].textContent ==="X") ||
     (box[6].textContent ==="X" && box[7].textContent ==="X" && box[8].textContent ==="X")||
     (box[0].textContent ==="X" && box[3].textContent ==="X" && box[6].textContent ==="X")||
     (box[1].textContent ==="X" && box[4].textContent ==="X" && box[7].textContent ==="X")||
     (box[2].textContent ==="X" && box[5].textContent ==="X" && box[8].textContent ==="X")||
     (box[0].textContent ==="X" && box[4].textContent ==="X" && box[8].textContent ==="X")||
     (box[2].textContent ==="X" && box[4].textContent ==="X" && box[6].textContent ==="X")){

        playerOne.addScore();
        playerOneScore.textContent = playerOne.getScore();
        for (let i = 0; i <result.length;i++){
            result[i].textContent = "Player 1 wins!!";
        }

    }
    else if ((box[0].textContent ==="O" && box[1].textContent ==="O" && box[2].textContent ==="O") ||
    (box[3].textContent ==="O" && box[4].textContent ==="O" && box[5].textContent ==="O") ||
    (box[6].textContent ==="O" && box[7].textContent ==="O" && box[8].textContent ==="O")||
    (box[0].textContent ==="O" && box[3].textContent ==="O" && box[6].textContent ==="O")||
    (box[1].textContent ==="O" && box[4].textContent ==="O" && box[7].textContent ==="O")||
    (box[2].textContent ==="O" && box[5].textContent ==="O" && box[8].textContent ==="O")||
    (box[0].textContent ==="O" && box[4].textContent ==="O" && box[8].textContent ==="O")||
    (box[2].textContent ==="O" && box[4].textContent ==="O" && box[6].textContent ==="O")){

       playerTwo.addScore();
       playerTwoScore.textContent = playerTwo.getScore();
       for (let i = 0; i <result.length;i++){
            result[i].textContent = "Player 2 wins!!";
         }
   }
   else if (box[0].textContent !="" && box[1].textContent !="" && box[2].textContent !="" &&
   box[3].textContent !="" && box[4].textContent !="" && box[5].textContent !="" &&
   box[6].textContent !="" && box[7].textContent !="" && box[8].textContent !=""){

        for (let i = 0; i <result.length;i++){
             result[i].textContent = "It's a draw";
        }

   }
}
function restartGame(){
    restart.addEventListener('click', ()=>{
        for (let i =0; i < box.length; i++){
            box[i].textContent = "";
            turn = 0
            
        }
        for (let i = 0; i <result.length;i++){
            result[i].textContent = "";
        }
    });
}
restartGame();