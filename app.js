/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, row, limit;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice = dice1 + dice2;
        console.log(dice1);
        console.log(dice2);
        row.push(dice1);
        row.push(dice2);
        row.shift();
        row.shift();
        console.log(row);

        if (row[0] === row[1] ){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }


        document.querySelector('.dice1').style.display = 'block';
        document.querySelector('.dice2').style.display = 'block';
        document.querySelector('.dice1').src = 'images/dice-' + dice1 + '.png';
        document.querySelector('.dice2').src = 'images/dice-' + dice2 + '.png';

        if (dice1 !== 11) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        console.log(limit);

        if (scores[activePlayer] >= limit ) {

            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';

            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';

            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            nextPlayer()
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init );

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    row = [0,0];

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    row = [0,0];
    limit = document.getElementById("myNumber").value;

    gamePlaying = true;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}





// document.querySelector('#current-' + activePlayer).textContent = dice;
// console.log(document.querySelector('#score-1').textContent);
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.add('active');
