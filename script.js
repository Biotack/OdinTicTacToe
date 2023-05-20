const HashBoard = (() => {
  const gameBoard = [[`1`,`2`,``,``,``,``,``,``,``]]
  
  const buildBaseGameBoard = () => {
    return gameBoard;
  }
  const resetGameBoard = () => {
    gameBoard = [[``,``,``,``,``,``,``,``,``]]
  }
  const fillGameBoardHash = (x, y, val) => {
    gameBoard[x][y] = val;
  }
  return {buildBaseGameBoard, resetGameBoard, fillGameBoardHash}
})();

const initGame = (() => {

})

const playerChar = (() => {
  const currentPlayer = {}
})
