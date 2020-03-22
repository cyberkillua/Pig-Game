/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, playGame;
innit();

document.querySelector(".btn-roll").addEventListener("click", function(){
    if (playGame){
            var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice') ;
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice > 1) {
            roundScore += dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        }else {
        nextPlayer()

    }
    }
    



} )
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-hold").addEventListener('click', function() {
    if(playGame) {
             // add the score to the main score
    scores[activePlayer] += roundScore;
   

    //display the score in the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]


    // move to the second players turn
     
    //change player whem it reaches 100
    if(scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
        document.querySelector(".dice").style.display = "none";
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
        playGame = false

    }else {
        nextPlayer()
    }
    }
   
})
function innit(){
    scores = [0, 0]
    roundScore = 0
    activePlayer = 0
    playGame= true
    document.querySelector(".dice").style.display = "none";

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
document.querySelector('.btn-new').addEventListener('click', innit);