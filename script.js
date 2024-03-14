let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('#reset');
let win = document.querySelector('#win');
let newbtn = document.querySelector('#new');
let wincont = document.querySelector('.winpopup');
let tern = true;

let winnigPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

const resetgame=()=>{
    tern=true;
    enableBoxes();
    win.classList.add("hide");
    wincont.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (tern == true) {
      box.innerHTML = 'X'
      tern = false
    } else {
      box.innerHTML = 'O'
      tern = true
    }
    box.disabled = true
    chechWinnwrs()
  })
})

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    win.innerText=`Congratulations,Winner Is ${winner}`;
    win.classList.remove("hide");
    wincont.classList.remove("hide");
    disableBoxes();
}




let chechWinnwrs = () => {
  for (let pattern of winnigPattern){
  let posi1Val=boxes[pattern[0]].innerText;
  let posi2Val= boxes[pattern[1]].innerText;
  let posi3Val=boxes[pattern[2]].innerText;
  if(posi1Val!=""&&posi2Val!=""&&posi3Val!=""){
    if(posi1Val==posi2Val&&posi2Val==posi3Val){
        showWinner(posi1Val);
    }
    
  }
}
}



newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);