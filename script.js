'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1 ;
let score = 20; 
document.querySelector('.number').textContent = secretNumber ;

document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value) ;

    if(!guess)
    {
        document.querySelector('.message').textContent = 'No Number !' ;
    }  
    
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = 'Correct Number :)' ;
    }

    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = 'Too High !' ;
            score = score - 1 ;
            document.querySelector('.score').textContent = score ;
        }
        else 
        {
            document.querySelector('.message').textContent = 'You lost the Game :(' ;
            document.querySelector('.score').textContent = 0 ;
        }
    }

    else if(guess < secretNumber)
    {   
        if(score > 1)
        {
            document.querySelector('.message').textContent = 'Too low !' ;
            score = score - 1 ;
            document.querySelector('.score').textContent = score ;
        }
        else 
        {
            document.querySelector('.message').textContent = 'You lost the Game :(' ;
            document.querySelector('.score').textContent = 0 ;
        }
    }
})