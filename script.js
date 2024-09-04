let gameSeq = [];
let userSeq = [];


let btns = ["yellow", "red", "purple", "green"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
    }
    started = true;

    levelUp();
});


function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 300);
};



function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 255);

};



function levelUp() {
    userSeq = [];   
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 3);
    let randColor = btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    
    // console.log(randColor);
    // console.log(randInd);
    // console.log(randBtn);   
    //random color
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
     
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) { 
    btn.addEventListener("click", btnPress)

}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
          
        }
    } else {
        h2.innerHTML = `GameOver! Your score was:- [<b>${level}</b>] <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        reset();
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"
        }, 600);

    }
}

function reset() {

    started = false;
    gameSeq = [];
    userSeq = [];

    level = 0;

}







