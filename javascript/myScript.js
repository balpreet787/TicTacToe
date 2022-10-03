const board = document.querySelector(".board");
const playerOneScore = document.querySelector(".playerOneScore");
const playerTwoScore = document.querySelector(".playerTwoScore");
const restart = document.querySelector(".restart");
const result = document.querySelectorAll(".result");
const submitPlayerOne = document.querySelector(".submit.playerOne");
const submitPlayerTwo = document.querySelector(".submit.playerTwo");
const usernameOne = document.querySelector(".username.one");
const usernameTwo = document.querySelector(".username.two");
const playerOneName = document.querySelectorAll(".playerOneName");
const playerTwoName = document.querySelectorAll(".playerTwoName");
const botOne = document.querySelector(".bot.one");
const botTwo = document.querySelector(".bot.two");

//Building the board to play the game on
function buildBoard(){
    let box = [];
    for (let i =0; i<=8; i++){
        box.push(document.createElement("div"));
        box[i].classList.add("box",(i+1));
        board.appendChild(box[i]);
        game(box[i])
    }
    return box;
}


const gameBoard = buildBoard();


//create player factory function
const Player = (username, submit, playerName)=>{
    let score = 0;
    let turn = true;
    const addScore = () => score++;
    const getScore = () => score;
    const changeTurn = (currentTurn) =>{
        turn = currentTurn;
    }
    const getTurn = () =>{
        return turn
    };
    const getPlayerName = () => {
        submit.addEventListener('click', ()=>{
            playerName.forEach(name => {
                if (username.value != ""){
                    name.textContent = username.value;
                }
            });
                
        });
    };

    return {getScore, addScore, getPlayerName,changeTurn,getTurn};
};


const playerOne = Player(usernameOne, submitPlayerOne, playerOneName);
const playerTwo = Player(usernameTwo, submitPlayerTwo, playerTwoName);
playerOne.getPlayerName();
playerTwo.getPlayerName();

console.log(typeof playerOne)


// add a function so two players can play the game 
function game(square){
    
    square.addEventListener('click',()=>{
        if (square.textContent === "X"){
            square.textContent = "X";
        }
        else if(square.textContent === "O"){
            square.textContent = "O";
        }
        else if (playerOne.getTurn() === true){
            square.textContent = "X";
            playerOne.changeTurn(false);
            playerTwo.changeTurn(true);
        
        }
        else if (playerTwo.getTurn() === true){
            square.textContent = "O";
            playerOne.changeTurn(true);
            playerTwo.changeTurn(false);
    }
    gameResult();
    });
}

// function to check who wins the game
function gameResult(){
    let box = gameBoard;
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
        for (let i =0; i < gameBoard.length; i++){
            gameBoard[i].textContent = "";
            playerOne.changeTurn(true);
            playerTwo.changeTurn(false);
            
        }
        for (let i = 0; i <result.length;i++){
            result[i].textContent = "";
        }
    });
}
restartGame();