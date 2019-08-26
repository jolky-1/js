const btns = document.querySelectorAll('button');
const output = document.querySelector('h3');
const scoreBoard = document.createElement('h4');
document.body.appendChild(scoreBoard)
const scores = document.querySelector('h4');
let btnsArr = ['Rock', 'Paper', 'Scissors'];
let score = [0,0];
for(let i = 0; i < btns.length;i++){
    btns[i].addEventListener('click',function(){
        const cpQuess = computerQuess();
        const play = winner(i,cpQuess);
        output.innerHTML = `${btnsArr[i]} vs ${btnsArr[cpQuess]}<br>${play}`;
        scores.innerHTML = `Score:<br>Player ${score[0]} Computer ${score[1]}`;
    });
}

function computerQuess(){
    let quess = Math.floor(Math.random() * btnsArr.length);
    return quess;
}

function winner(player,cp){ //0 == Rock, 1 == Paper, 2 == Scissors
    if(player == 0 && cp == 2){
        score[0]++;
        return 'Player wins';
    }else if(player == 1 && cp == 0){
        score[0]++;
        return 'Player wins';
    }else if(player == 2 && cp == 1){
        score[0]++;
        return 'Players wins';
    }else if(player == cp){
        return "it's Draw";
    }else{
        score[1]++
        return 'Computer wins'
    }
}

