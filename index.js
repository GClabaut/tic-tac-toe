function gameboard () {
  let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  const resetGameboard = () => {
    gameboard.length = 0;
    gameboard.push(
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    );
  };

  return { gameboard, resetGameboard }
}

function player (playerSign) {
  const sign = playerSign;
  return { sign }
}

const player1 = player("X");
const player2 = player("O");

function gameController () {

  let playBoard = gameboard();
  let player = player1;

  const changeTurn = () => {
    player = player === player1 ? player2 : player1;
  }

  const play = (row, column) => {
    console.log(player)
    playBoard.gameboard[row][column] = player.sign;
    changeTurn();
    console.log(playBoard.gameboard);
  }

  return { playBoard, play }
}

// Example play + reset
// let gameboard2 = gameboard();
// gameboard2.gameboard[1] = player1.sign;
// console.log(gameboard2.gameboard);
// gameboard2.resetGameboard();
// console.log(gameboard2.gameboard);

// Test gameController, O wins
const play = gameController();
console.log(play);

play.play(1,1);

play.play(0,0);

play.play(2,0);

play.play(0,2);

play.play(2,2);

play.play(0,1);

// play.playBoard.resetGameboard();
// console.log(play.playBoard.gameboard);