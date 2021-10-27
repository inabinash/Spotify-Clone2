console.log("Welcome Bro!!!")
let reset=new Audio("reset.mp3")
let audioturn=new Audio("bing.mp3")
let gameover=new Audio("gameover.mp3")
let turn ="X"

const changeTurn=()=>{
    return turn==="X"?"0":"X"
}

const checkWin=()=>{

}


//GAME LOGIC

let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxtext=document.querySelector('.boxtext');
     boxtext.addEventListener('click',(e)=>{
         if(boxtext.innerText===''){
            boxtext.innnerText=turn;
            changeTurn();
            audioturn.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innertext="Turn For" + turn;
         }
     })
})