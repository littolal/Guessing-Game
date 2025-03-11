'use strict';
document.addEventListener("DOMContentLoaded",function(){
    var randNumber=document.querySelector(".number");//Variable initializations
    var guessNumber=document.querySelector(".guess");
    var againButton=document.querySelector(".btn.again");
    var checkButton=document.querySelector(".btn.check");
    var score=document.querySelector(".score");
    var highScore=document.querySelector(".highscore");
    var message=document.querySelector(".message");

    var randomNumber=Math.floor(Math.random()*20)+1;    //Random number generation

    //Check button actions
    checkButton.addEventListener("click",function(){
        if(guessNumber.value==randomNumber) {   //
            message.textContent="Correct";
            highScore.textContent=score.textContent;
            randNumber.textContent=randomNumber;
            document.body.style.backgroundColor="green";
        } else {
            (guessNumber.value>randomNumber)?message.textContent="Too High📈":message.textContent="Too Low📉";  
            //Ternary operator for high and low guesses
            score.textContent=Number(score.textContent)-1;

        }
    });
    //Again button actions 
    againButton.addEventListener("click",function(){
        highScore.textContent=score.textContent;
        document.body.style.backgroundColor="black";
        score.textContent="20";
        randNumber.textContent="?";
    });
});