let gameboardDiv = document.getElementById("gameboard");
let winnerMsg = document.getElementById("winner-ad");
let tryAgainBtn = document.getElementById("tryAgainBtn");
let turnMsg = document.getElementById("turn-paragraph");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

// let playerX = "X";
let playerX = {
    sign: "X",
    score: 0
}

// let playerO = "O";
let playerO = {
    sign: "O",
    score: 0
}
// let firstTurn = true;
let currentPlayer = playerX;

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

console.log(winner[4]);

const gameEssentials = (function() {
    const displayBoard = () => {
        let board = document.createElement("div");
        board.classList.add("board");
        // console.log("displayBoard IIFE");
        for(let i = 0; i < 9; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = "";
            board.appendChild(cell);
            let cells = document.getElementsByClassName("cell");
            turnMsg.innerText = "Player's turn: " + currentPlayer.sign;
            cell.addEventListener("click", () => {
                if(cell.innerText === "") {
                    cell.innerText = selectCell(i, currentPlayer);
                    if (checkWinner(currentPlayer, cells)){
                        console.log("Winner: " + currentPlayer);
                        turnMsg.innerText = "Winner: " + currentPlayer.sign;
                        displayScore(playerX, playerO);
                        board.style.pointerEvents = "none";
                    } else {
                        if(currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX);
                        turnMsg.innerText = "Player's turn: " + currentPlayer.sign;
                    }
                } else {
                    return;
                }
            })
        }
        gameboardDiv.appendChild(board);
    };
    const checkWinner = (currentPlayer, cells) => {
        for(let i = 0; i < winner.length; i++) {
            const [a,b,c] = winner[i];
            if(cells[a].innerText === currentPlayer.sign && 
                cells[b].innerText === currentPlayer.sign && 
                cells[c].innerText === currentPlayer.sign) {
                console.log("win: ", currentPlayer.sign);
                currentPlayer.score = currentPlayer.score + 1;
                return true;
            }
        }
    };
    const displayScore = (player1, player2) => {
        player1Score.textContent = player1.score;
        player2Score.textContent = player2.score;

    };
    const startGame = (player1, player2) => {
        displayBoard(player1, player2);
        displayScore(player1, player2);
    };
    const tryAgain = () => {
        gameboardDiv.innerText = "";
        winnerMsg.innerText = "";
        displayBoard();
    }

    return { displayBoard, startGame, checkWinner, tryAgain };
})();

    const selectCell = (i, currentPlayer) => {
        let sign = currentPlayer.sign;
        return sign;
    }

tryAgainBtn.addEventListener('click', () => {
    gameEssentials.tryAgain();
});

gameEssentials.startGame(playerX, playerO);