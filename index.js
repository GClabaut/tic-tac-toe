let score1 = 0;
let score2 = 0;

const gameboard = {
  board : [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ],

  resetGameboard : (board) => {
    board.length = 0;
    board.push(
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    );
  }
};


function player (playerName, playerSign) {
  const name = playerName;
  const sign = playerSign;
  return { name, sign }
}


function gameController (gameboard, playerCreator) {

  const player1 = playerCreator("player one", "X");
  const player2 = playerCreator("player two", "O");
  const {board,resetGameboard} = gameboard;
  let player = player1;
  let roundWon = false;
  const changeTurn = () => {
    player = player === player1 ? player2 : player1;
  }

  const winCheck = () => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === "" || board[0][i] === "") {
        continue;
      }
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        roundWon = true;
        break;
      } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        roundWon = true;
        break;
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      roundWon = true;
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      roundWon = true;
    }
  }

  const play = (row, column) => {
    let j = 0;
    if (board[row][column] !== "") {
      console.log("error");
    }
    else {
      board[row][column] = player.sign;
      winCheck();
      console.log(roundWon)
      if (roundWon === true) {
        console.log(player.name + " wins !")
        player === player1 ? score1++ : score2++;
        console.log(score1);
        console.log(score2);
        resetGameboard(board);
        roundWon = false;
      }
      for (let i = 0; i < board.length; i++) {
        if (!board[i].includes("")) {
          j++;
        }
      }
      if (j === 3) {
        console.log("Draw");
        resetGameboard(board);
      }
      changeTurn();
    console.log(board);
    }
  }

  return { play }
}


// Test gameController
const play = gameController(gameboard, player);

// player2 wins horizontal
// play.play(1,1);
// play.play(1,1);
// play.play(0,0);
// play.play(2,0);
// play.play(0,2);
// play.play(2,2);
// play.play(0,1);

// player2 wins vertical
// play.play(1,1);
// play.play(0,0);
// play.play(2,2);
// play.play(1,0);
// play.play(1,2);
// play.play(2,0);

// player1 wins diagonal
// play.play(1,1);
// play.play(2,0);
// play.play(0,0);
// play.play(2,1);
// play.play(2,2);

// Draw
// play.play(1,1);
// play.play(0,0);
// play.play(0,2);
// play.play(2,0);
// play.play(1,0);
// play.play(1,2);
// play.play(2,1);
// play.play(0,1);
// play.play(2,2);