const gameModel = (() => { 
  let board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => {
    return board
  }
  const setBoard = (position, marker) => {
    board[position] = marker;
  }

  const resetBoard = () => board.fill("");

  return { getBoard, setBoard, resetBoard };
})();

const gameLogic = (() => {

  let currentPlayer = "X";
  let gameActive = true;




  
})();