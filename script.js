let gameboardDiv = document.getElementById("gameboard");
let winnerMsg = document.getElementById("winner-ad");
let tryAgainBtn = document.getElementById("tryAgainBtn");
let turnMsg = document.getElementById("turn-paragraph");

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
                        // winnerMsg.textContent = "Winner: " + currentPlayer.sign;
                        turnMsg.innerText = "Winner: " + currentPlayer.sign;
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
                return true;
            }
        }
    };
    const startGame = (player1, player2) => {
        displayBoard(player1, player2);
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

// function createUser(name) {
//     const discordName = "@" + name;

//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation++;

//     return { name, discordName, getReputation, giveReputation };
// }

// const cris = createUser("Cris");
// cris.giveReputation();

// console.log({
//   discordName: cris.discordName,
//   reputation: cris.getReputation()
// });

// function createPlayer(name, level) {
//     const { getReputation, giveReputation } = createUser(name);

//     const getLevel = () => level;
//     const increaseLevel = () => level++;
//     return { name, getReputation, giveReputation, getLevel, increaseLevel, level };
// }

// const cristian = createPlayer("cristian", 10);
// cristian.giveReputation();
// cristian.increaseLevel();

// console.log({
//     name: cristian.name,
//     reputation: cristian.getReputation(),
//     level: cristian.getLevel(),
// });