

let boxes = document.querySelectorAll(".btn");
let winnerShow = document.querySelector("#winner");
let play = document.querySelector(".hidden");
const resetBtn = document.querySelector("#reset");


let player =true;

let gamePatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let moveCount = 0;

const resetGame = () => {
  player = true;
  moveCount = 0;
  gameOver = false;
  winnerShow.innerText = "";

  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "";
  });

  playBox.classList.add("hidden"); // optional: hide play-again
};


const playAagin = ()=>{
    player = true
    moveCount=0
    gameOver =false;
    play.classList.add("hidden")
    winnerShow.innerText =""
    enble()
}
const disable =()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enble =()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText=""
    }
}

const showWin =(winner)=>{
    winnerShow.innerText=`Winner is ${winner}`
    play.classList.remove("hidden")
    disable();
    
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player){
            box.innerText ="O"
            box.style.color ="red"
            
        }else{
            box.innerText ="X"
             box.style.color ="yellow"
         
        }
    
    player = !player;
    box.disabled = true;
    moveCount++;
    win();
    })
})

win =()=>{
    gamePatterns.forEach((pattern)=>{
        let p1 =(boxes[pattern[0]].innerText)
        let p2 =(boxes[pattern[1]].innerText)
        let p3 =(boxes[pattern[2]].innerText)
        if(p1 !="" && p2!=""&& p3 !=""){
            if (p1 && p1 === p2 && p2 === p3) {
            showWin(p1);
            return;
        }
        
        }})
        if (moveCount === 9) {
        showDraw();
    }

    
}

play.addEventListener("click",playAagin)
resetBtn.addEventListener("click", resetGame);
