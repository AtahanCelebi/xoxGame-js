const boxs = document.querySelectorAll(".box");
const playerTurn = document.querySelector("#playerTurn");
let thePlayer = "X";
let theGame = false;
let winner = "";

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

    checkMove();

    if (theGame) {
        playerTurn.setAttribute("class","alert")
        playerTurn.setAttribute("class","alert-success")
        playerTurn.textContent = `Game is over, ${winner} Won!!!`
        boxs.forEach(oneBox => oneBox.style.pointerEvents="none")
        
    }
}


function checkMove(){
    checkRows();
    checkCols();
    checkCross();
}


function checkRows(){
    let row1 = boxs[0].textContent == boxs[1].textContent &&
        boxs[0].textContent == boxs[2].textContent && boxs[0].textContent !== ""
    let row2 = boxs[3].textContent == boxs[4].textContent &&
        boxs[3].textContent == boxs[5].textContent && boxs[3].textContent !== ""
    let row3 = boxs[6].textContent == boxs[7].textContent &&
        boxs[6].textContent == boxs[8].textContent && boxs[6].textContent !== ""

    if (row1 || row2 || row3) {
        theGame = true
    }
    if (row1) {

        boxs[0].style.background ="#C80D0D";
        boxs[1].style.background ="#C80D0D";
        boxs[2].style.background ="#C80D0D";
        return winner = boxs[0].textContent
    }
    if (row2) {

        boxs[3].style.background ="#C80D0D";
        boxs[4].style.background ="#C80D0D";
        boxs[5].style.background ="#C80D0D";
        return winner = boxs[3].textContent
    }
    if (row3) {

        boxs[6].style.background ="#C80D0D";
        boxs[7].style.background ="#C80D0D";
        boxs[8].style.background ="#C80D0D";
        return winner = boxs[6].textContent
    }
    
}

function checkCols(){
    let col1 = boxs[0].textContent == boxs[3].textContent &&
        boxs[0].textContent == boxs[6].textContent && boxs[0].textContent !== ""
    let col2 = boxs[1].textContent == boxs[4].textContent &&
        boxs[1].textContent == boxs[7].textContent && boxs[1].textContent !== ""
    let col3 = boxs[2].textContent == boxs[5].textContent &&
        boxs[2].textContent == boxs[8].textContent && boxs[2].textContent !== ""

    if (col1 || col2 || col3) {
        theGame = true
    }
    if (col1) {

        boxs[0].style.background ="#C80D0D";
        boxs[3].style.background ="#C80D0D";
        boxs[6].style.background ="#C80D0D";
        return winner = boxs[0].textContent
    }
    if (col2) {

        boxs[1].style.background ="#C80D0D";
        boxs[4].style.background ="#C80D0D";
        boxs[7].style.background ="#C80D0D";
        return winner = boxs[1].textContent
    }
    if (col3) {

        boxs[2].style.background ="#C80D0D";
        boxs[5].style.background ="#C80D0D";
        boxs[8].style.background ="#C80D0D";
        return winner = boxs[2].textContent
    } 
}

function checkCross(){
    let crossline1 = boxs[0].textContent == boxs[4].textContent &&
        boxs[0].textContent == boxs[8].textContent && boxs[0].textContent !== ""
    let crossline2 = boxs[2].textContent == boxs[4].textContent &&
        boxs[2].textContent == boxs[6].textContent && boxs[2].textContent !== ""

    if (crossline1 || crossline2) {
        theGame = true
    }
    if (crossline1) {

        boxs[0].style.background ="#C80D0D";
        boxs[4].style.background ="#C80D0D";
        boxs[8].style.background ="#C80D0D";
        return winner = boxs[0].textContent
    } 
    if (crossline2) {

        boxs[2].style.background ="#C80D0D";
        boxs[4].style.background ="#C80D0D";
        boxs[6].style.background ="#C80D0D";
        return winner = boxs[2].textContent
    } 

}
xoxGame();

