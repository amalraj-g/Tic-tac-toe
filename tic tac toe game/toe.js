const cells=document.querySelectorAll(".cell");
const restart=document.querySelector(".game--restart");
const statusDisplay = document.querySelector(".game--status");
let first="X";
let second="O";
let currentPlayer = first;
let running=false;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;

startGame();

 function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClick));
    restart.addEventListener("click", handleRestartGame);
    running="true";
}


function cellClick(){
    const index = this.dataset.index;
    if(gameState[index] !== "" || !running){
        return;
    }
    updateCell(this,index);
    checkWinner();

}


function updateCell(cell,index){
    cell.innerHTML=currentPlayer;
}

function checkWinner(){
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let one = gameState[winCondition[0]];
            let two = gameState[winCondition[1]];
            let three = gameState[winCondition[2]];
            if (one === " " || two === " " || three === " ") {
                continue;
            }
            if (one === two && two === three) {
                roundWon = true;
            }
        }
        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            running = false;
            }
        else if (!gameState.includes("")){
            statusDisplay.innerHTML = drawMessage();
            running = false;
            }
        else {
            changePlayer();
            }
    
}

function changePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".cell")
               .forEach(cell => cell.innerHTML = "");
}



















/*const boxs=document.querySelectorAll('.box');
const statusTxt=document.querySelector('#status');
const btnRestart=document.querySelector('#restart');
let x="<img src='images/x.png'>";
let o="<img src='images/o.png'>";

const win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let options=["","","","","","","","",""];
let currentPlayer=x;
let player="X";
let running=false;
init();

function init(){
  boxs.forEach(box=>box.addEventListener('click',boxClick));
  btnRestart.addEventListener('click',restartGame);
  statusTxt.textContent=`${player} Your Turn`;
  running=true;
}

function boxClick(){
  const index=this.dataset.index;
  if(options[index]!="" || !running){
    return;
  }
  updateBox(this,index);
  checkWinner();
}

function updateBox(box,index){
  options[index]=player;
  box.innerHTML=currentPlayer;
}

function changePlayer(){
    player=(player=='X') ? "O" :"X";
    currentPlayer=(currentPlayer==x) ? o :x;
    statusTxt.textContent=`${player} Your Turn`;
}

function checkWinner(){
  let isWon=false;
  for(let i=0;i<win.length;i++){
    const condition=win[i]; //[0,1,2]
    const box1=options[condition[0]]; //x
    const box2=options[condition[1]]; //''
    const box3=options[condition[2]]; //''
    if(box1=="" || box2=="" || box3==""){
      continue;
    }
    if(box1==box2 && box2==box3){
      isWon=true;
      boxs[condition[0]].classList.add('win');
      boxs[condition[1]].classList.add('win');
      boxs[condition[2]].classList.add('win');
    }
  }

  if(isWon){
    statusTxt.textContent=`${player} Won..`;
    running=false;
  }else if(!options.includes("")){
    statusTxt.textContent=`Game Draw..!`;
    running=false;
  }else{
    changePlayer();
  }

}

function restartGame(){
  options=["","","","","","","","",""];
  currentPlayer=x;
  player="X";
  running=true;
  statusTxt.textContent=`${player} Your Turn`;

  boxs.forEach(box=>{
      box.innerHTML="";
      box.classList.remove('win');
  });
}*/








