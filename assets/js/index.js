let board = document.getElementById("theBoard");
// array for board postions
let postionArray = [];
let  next = "X";

// use loop to create 3x3 board with correct classes/set up object on board
// Object
class boardObject {
    constructor(divs,index) {
        this.divs = divs;
        this.index = index;
        this.state = "";
    }
}
for (let index = 0; index < 9; index++) {
    let div = document.createElement("div");
    div.classList.add("square");
    let square = new boardObject(div, index);
    div.onclick = function() {
        boardObject.state = next;
        next = next == 'X' ? 'O' : 'X';
        console.log("yes" + index + boardObject.state)
        div.onclick = false;
    } 
    board.appendChild(div);
    postionArray.push(square);
}
console.log(postionArray)