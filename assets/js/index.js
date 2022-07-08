let board = document.getElementById("theBoard");
// array for board postions
const positionArray = [];
let next = "X";
// create  Object 
class ClassBoardObject {
    constructor(divs, index) {
      this.divs = divs;
      this.index = index;
      this.state = "";
    }
    clicked() {
      this.state = next;
      this.divs.onclick = function () {
        return false;
      };
      this.divs.querySelector("p").innerHTML = this.state;
      if (wonGame()) return gameOver("the winner is player " + this.state);
      if (isDraw()) return gameOver("it is a draw");
      next == "X" ? (next = "O") : (next = "X");
    }
  }


  // use loop to create 3x3 board with correct classes/set up object on board
  for (let index = 0; index < 9; index++) {
    const div = document.createElement("div");
    div.classList.add("square");
    const square = new ClassBoardObject(div, index);
    div.onclick = function () {
      square.clicked();
    };
    div.appendChild(document.createElement("p"));
    board.appendChild(div);
    positionArray.push(square);
  }


//winning conditions
function wonGame() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      positionArray[a].state !== "" &&
      positionArray[a].state === positionArray[b].state &&
      positionArray[a].state === positionArray[c].state
    ) {
      return true;
    }
  }
  return false;
}

