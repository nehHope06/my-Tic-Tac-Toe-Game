let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO =true;//playerx, player0
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 const resetgame=()=>{
    
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
   
 }

 
  
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }

        else{
            box.innerText="X";
            turnO=true;
        }
        
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            drawgame();
        }
    
        
    })
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
     msgcontainer.classList.remove("hide");
    disableboxes();

}

const checkwinner = () =>{
 for( let pattern of winpatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    // console.log(boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    // );

     let  pos1=boxes[pattern[0]].innerText;
     let  pos2=boxes[pattern[1]].innerText;
     let  pos3=boxes[pattern[2]].innerText;

     if(pos1!="" && pos2!="" && pos3!="" ){
        if(pos1==pos2&&pos2==pos3){
            console.log("winner");
            showwinner(pos1);
        
        }
     }
 }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

// newgamebtn.addEventListener("click",myFunc);
// resetbtn.addEventListener("click",myFunc);
 
const drawgame=()=>{
    msg.innerText="It's a draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
}


// const changeColor=(color)=> {
//     document.body.style.background = color;
// }

// const myFunc=()=> {
//     changeColor('yellow');
//     result.innerHTML = "Background Color changed";
// }        