const boxs = document.querySelectorAll(".box");
const playerTurn = document.querySelector("#playerTurn");
let thePlayer = "X";

function xoxGame(){
    playerTurn.innerHTML = `Player Turn: ${thePlayer}`
    boxs.forEach(oneBox => oneBox.addEventListener("click",()=> nextMove(oneBox)))



}

function nextMove(oneBox){
    oneBox.textContent = thePlayer;

}

xoxGame();