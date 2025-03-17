const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => {
    return board;
  };
  const setBoard = (position, marker) => {
    board[position] = marker;
  };
  const resetBoard = () => board.fill("");

  return { getBoard, setBoard, resetBoard };
})();

const gamePlayer = (() => {
  let player1 = "X";
  let player2 = "O";

  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;

  return { getPlayer1, getPlayer2 };
})();

const gameLogic = (() => {
  let currentPlayer = gamePlayer.getPlayer1();
  let gameActive = true;
  const board = gameBoard.getBoard();
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  const checkWinner = () => {
    for (let condition of winningConditions) {
      const [first, second, third] = condition;
      if (
        board[first] &&
        board[first] === board[second] &&
        board[first] === board[third]
      ) {
        gameActive = false;
        displayController.updateMessage(
          `Game over! The winner is ${currentPlayer}`
        );
      }
    }

    if (!board.includes("")) {
      gameActive = false;
      displayController.updateMessage("It's a tie!");
    }
  };

  const playerInput = (position) => {
    if (!gameActive) return;

    gameBoard.setBoard(position, currentPlayer);
    displayController.updateBoard();
    checkWinner();
    switchPlayer();
  };

  const switchPlayer = () => {
    if (gameActive) {
      currentPlayer =
        currentPlayer === gamePlayer.getPlayer1()
          ? gamePlayer.getPlayer2()
          : gamePlayer.getPlayer1();
      displayController.updateMessage(`It's ${currentPlayer}'s turn`);
    }
  };

  return { checkWinner, playerInput, switchPlayer };
})();

const displayController = (() => {
  const cells = document.querySelectorAll(".cell");
  const message = document.querySelector("#status");
  const resetButton = document.querySelector("#reset");

  const updateBoard = () => {
    const board = gameBoard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  };

  const updateMessage = (content) => {
    message.textContent = content;
  };

  const resetBoard = () => {
    gameBoard.resetBoard();
    updateBoard();
    updateMessage("");
  };

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      gameLogic.playerInput(index);
    });
  });

  resetButton.addEventListener("click", resetBoard);

  return { updateBoard, updateMessage };
})();
