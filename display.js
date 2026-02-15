import { words } from "./data.js";

export function wordsOut(words,levelWord){
    console.log(levelWord);
    for(let i=0;i<words[levelWord-1].words.length;i++){
        const displayWord = document.getElementById(`word-${i+1}`);
        displayWord.innerText = `${words[levelWord-1].words[i]}`;
    }

    for(let i=0;i<words[levelWord-1].options.length;i++){
        const displayOption = document.getElementById(`btn-select${i+1}`)
        displayOption.innerText = `${words[levelWord-1].options[i]}`;
        displayOption.value = words[levelWord-1].options[i];
    }

    let answer = words[levelWord-1].answer;
    console.log(answer);
    answerCheck(answer);
}

export function answerCheck(answer){
const btn1 = document.querySelector("#btn-select1");
const btn2 = document.querySelector("#btn-select2");
const btn3 = document.querySelector("#btn-select3");
const btn4 = document.querySelector("#btn-select4");

btn1.addEventListener("click", () => {
    let passLevel = document.getElementById(`${count}`);
    let nextLevel = document.getElementById(`${count+1}`);
    validateInput(btn1,answer,passLevel,nextLevel);
});

btn2.addEventListener("click", () => {
    let passLevel = document.getElementById(`${count}`);
    let nextLevel = document.getElementById(`${count+1}`);
    validateInput(btn2,answer,passLevel,nextLevel);
});

btn3.addEventListener("click", () => {
    let passLevel = document.getElementById(`${count}`);
    let nextLevel = document.getElementById(`${count+1}`);
    validateInput(btn3,answer,passLevel,nextLevel);
});

btn4.addEventListener("click", () => {
    let passLevel = document.getElementById(`${count}`);
    let nextLevel = document.getElementById(`${count+1}`);
    validateInput(btn4,answer,passLevel,nextLevel);
});
};

export function validateInput(input,answer,passLevel,nextLevel){
        if(input.value == answer){
            input.style.backgroundColor = "Green";
            let i=0;
                        setInterval(() => {
                if(i<1){
                    i++;
                }else{
                    input.style.backgroundColor = "";                
                }
            },100)
            scoreCal()
            levelWord++;
            nextlevelDisplay(passLevel,nextLevel);
            count++;
            wordsOut(words,levelWord);
        }
        else{
            input.style.backgroundColor = "Red";
            let i=0;

            setInterval(() => {
                if(i<2){
                    i++;
                }else{
                    input.style.backgroundColor = "";                
                }
            },200)
        }
}

export function scoreCal(){
    const scoreOutp = document.querySelector(".score-span");
    scoreOutp.innerText = `${(Number(scoreOutp.id)+5)}`
    scoreOutp.id = `${(Number(scoreOutp.id)+5)}`;
}

export function nextlevelDisplay(passLevel,nextLevel){
    passLevel.style.backgroundColor = "white";
    passLevel.style.color = "black";

    nextLevel.style.backgroundColor = "black";
    nextLevel.style.color="white";
}

let count = 1;
export let levelWord=1;
