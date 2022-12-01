const cellFrame = document.querySelectorAll(".cell");
const playStatus = document.querySelector("#game-status");
const btnRestart = document.querySelector("#game-restart");
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
let state=["","","","","","","","",""];
let currentPlayer=x;
let player="X";
let runningCdn=false;

init();

function init(){
  cellFrame.forEach(cell => cell.addEventListener("click", cellClick));
  btnRestart.addEventListener("click",restartGame);
  playStatus.textContent=`${player} Your Turn`;
  runningCdn=true;
}

function cellClick(){
  const index= this.dataset.index;
    if(state[index]!="" || !runningCdn){
      return;
    }
    updateCell(this,index);
    checkWinner();
  }

function updateCell(cell,index){
  state[index]=player;
  cell.innerHTML=currentPlayer;
}

function changePlayer(){
    player=(player=="X") ? "O" :"X";
    currentPlayer=(currentPlayer==x)? o :x;
    playStatus.textContent=`${player} Your Turn`;
}

function checkWinner(){
  let isWon=false;
  for(let i=0;i<win.length;i++){
    const condition=win[i]; 
    const cellOne = state[condition[0]]; 
    const cellTwo = state[condition[1]]; 
    const cellThree = state[condition[2]];

    if( cellOne == "" || cellTwo == "" || cellThree == ""){
      continue;
    }
    if( cellOne == cellTwo && cellTwo==cellThree){
      isWon=true;
      cellFrame[condition[0]].classList.add("win");
      cellFrame[condition[1]].classList.add("win");
      cellFrame[condition[2]].classList.add("win");
    }
  }

  if(isWon){
    playStatus.textContent=`${player} Won..`;
    runningCdn=false;
  }else if(!state.includes("")){
    playStatus.textContent=`Game Draw..!`;
    runningCdn=false;
  }else{
    changePlayer();
  }

}

function restartGame(){
  state=["","","","","","","","",""];
  currentPlayer=x;
  player="X";
  runningCdn=true;
  playStatus.textContent=`${player} Your Turn`;

  cellFrame.forEach(cell=>{
      cell.innerHTML= "";
      cell.classList.remove("win");
  });
}





