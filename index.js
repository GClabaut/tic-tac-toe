function gameboard () {
  let gameboard = ["", "", "", "", "" ,"" ,"" , "", ""];

  const resetGameboard = () => {
    gameboard.length = 0;
    gameboard.push("", "", "", "", "" ,"" ,"" , "", "");
  };

  return { gameboard, resetGameboard }
}

function player (playerSign) {
  const sign = playerSign;
  return { sign }
}

function gameController () {
  // 
}

const player1 = player("X");
const player2 = player("O");


// Example play + reset
let gameboard2 = gameboard();
gameboard2.gameboard[1] = player1.sign;
console.log(gameboard2.gameboard);
gameboard2.resetGameboard();
console.log(gameboard2.gameboard);