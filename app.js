let gameSeq = [];
let userSeq = [];
let higest = 0;
let btns = ["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started == false) {
        console.log("Game is ON");
        started = true;
        levelup();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    },300);

}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    },300);


}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()* btns.length);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
    
    if(level > higest) {
        higest = level;
    }
}

function checkAns(idx) {
   
   if(userSeq[idx] == gameSeq[idx]) {
    if(userSeq.length == gameSeq.length) {
       setTimeout( levelup,1000);
    }
   }else {
    h2.innerHTML = `Game Over! Your score was <b> ${level} </b><br><b> Highest Score : ${higest} </b><br>Press any key to start `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    },150)
       reset();
   }
}

function btnpress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

