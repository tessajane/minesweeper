document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = new Object()

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
}

board.properties = {}
board.cells = {name: "cells"};


var board = {
  cells: [
    {row: 0, col: 0, isMine: true, hidden: true}, {row: 0, col: 1, isMine: true, hidden: true},{row: 0, col: 2, isMine: false, hidden: true},{row: 0, col: 3, isMine: false, hidden: true},
    {row: 1, col: 0, isMine: true, hidden: true},{row: 1, col: 1, isMine: false, hidden: true},{row: 1,col: 2, isMine: false, hidden: true},{row: 1,col: 3, isMine: true, hidden: true},
    {row: 2, col: 0, isMine: true, hidden: true},{row: 2, col: 1, isMine: false, hidden: true},{row: 2,col: 2, isMine: false, hidden: true},{row: 2,col: 3, isMine: true, hidden: true},
    {row: 3, col: 0, isMine: false, hidden: true},{row: 3, col: 1, isMine: false, hidden: true},{row: 3,col: 2, isMine: true, hidden: true},{row: 3,col: 3, isMine: true, hidden: true}
  ]
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  var winCells = 0;
  for (var k = 0; k <board.cells.length; k++) {
    if (board.cells[k].isMine && board.cells[k].isMarked || board.cells[k].isMine == false && board.cells[k].hidden == false) {
      winCells++;
    }
    if (winCells == board.cells.length) {
      lib.displayMessage('You win!');
    }
  }


// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
// function countSurroundingMines (cell) {

  function countSurroundingMines (cell) {
    console.log("hello")
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var count = 0;
    for (var i = 0; i < surrounding.length; i++) { 
      if (surrounding[i].isMine) {
        count++;
      } 
    }
    return count
  };