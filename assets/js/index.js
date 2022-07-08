let board = document.getElementById("theBoard");
// array for board postions
let postionArray = [];
//character for next move
let  next = "X"; 
const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
// create  Object 
class boardObject {
    constructor(divs,index) {
        this.divs = divs;
        this.index = index;
        this.state = "";
    }
}
// use loop to create 3x3 board with correct classes/set up object on board
for (let index = 0; index < 9; index++) {
    let div = document.createElement("div");
    div.classList.add("square");
    let square = new boardObject(div, index);
    div.onclick = function() {
        boardObject.state = next;
        div.querySelector("p").innerText = next;
        next = next == 'X' ? 'O' : 'X';
        console.log("yes" + index + boardObject.state)
        div.onclick = false;
         
    } 
    board.appendChild(div);
    div.appendChild(document.createElement("p"));
    postionArray.push(square);
}

function gameEnd() {
    document.getElementById('gameOver').style.display = "absolute";
    //document.getElementById('gameOver').innerText = "hello"
    
}

function winner() {
    
    for(let i = 0; i<= 8; i++ ) {
        const condition = conditions[i];
        if(
            condition[0] === "" ||
            condition[1] === "" ||
            condition[2] === "" 
        ) {
            gameEnd = false;
            continue
        };
        if(
            condition[0] === condition[1] &&
            condition[0] === condition[1]
        ) {
            gameEnd = true;
        }
    }
}



console.log(postionArray)