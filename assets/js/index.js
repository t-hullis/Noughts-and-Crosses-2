let board = document.getElementById("theBoard");
let score = document.getElementById("score");
let x_score = 0; 
let o_score = 0;
score.innerHTML = "Score X :  "+ x_score + "<br />"+ " Score O :  " + o_score;
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
      if(this.state == "X" || this.state == "O") {
        return false
      }
      this.state = next;
      this.divs.querySelector("p").innerHTML = this.state; 
      if (isDraw()) {gameOverDraw();}
      if (wonGame()) { gameOverWin(); }
      next == "X" ? (next = "O") : (next = "X");
    }
  }


// this function runs at the end of the game
  function gameOverWin() {
    document.getElementById("winner").innerHTML = ("  the winner is " + next ) ;
    document.getElementById("gameOver").style.display = "flex";
    if(next == "X") {
      x_score = x_score +1;
    }
    if(next == "O") {
      o_score = o_score + 1;
    }
    score.innerHTML = "Score X :  "+ x_score + "<br />"+ " Score O :  " + o_score;
  }
  function gameOverDraw() {
    document.getElementById("winner").innerHTML = (" this is a draw") ;
    document.getElementById("gameOver").style.display = "flex";
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

  console.log(positionArray)

let reset = document.getElementById("reset");
reset.onclick = function(){
next = "X"
document.getElementById("gameOver").style.display = "none";
p = document.getElementsByTagName("p");
for(let c = 0; c < 9; c++){
  p[c].innerHTML = ""
}
for(let x = 0; x < 9; x++){
  positionArray[x].state = "";
}
};

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
function isDraw() {
  let shouldReturn = true;
  positionArray.forEach(function({state}) {
    if (state == "") shouldReturn = false;
  });
  return shouldReturn;
}

