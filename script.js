const boxs = document.querySelectorAll(".box");
const playerTurn = document.querySelector("#playerTurn");
let thePlayer = "X";

function xoxGame(){
    playerTurn.innerHTML = `Player Turn: ${thePlayer}`
    boxs.forEach(oneBox => oneBox.addEventListener("click",()=> nextMove(oneBox)))



}

function nextMove(oneBox){
    oneBox.textContent = thePlayer;
    changePlayer();

}

function changePlayer(){
    if (thePlayer ==="X"){
        thePlayer ="O";
        playerTurn.textContent = `Player Turn: ${thePlayer}`
    }
    else if (thePlayer ==="O"){
        thePlayer ="X";
        playerTurn.textContent = `Player Turn: ${thePlayer}`
    }
}

xoxGame();