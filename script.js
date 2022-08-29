const boxs = document.querySelectorAll(".box");
const playerTurn = document.querySelector("#playerTurn");
let thePlayer = "X";

function xoxGame(){
    playerTurn.innerHTML = `Player Turn: ${thePlayer}`
    boxs.forEach(oneBox => oneBox.addEventListener("click",()=> nextMove(oneBox)))



}

function nextMove(oneBox){
    if(oneBox.textContent===""){
    oneBox.textContent = thePlayer;
    changePlayer();
    }else{
        alert("Wrong Choose, the block is not empty!!!");
        oneBox.style.border ="3px solid red"
        setTimeout(()=> {
            oneBox.style.border ="1px solid black"
        },2000)
    }

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