const coinArray = ['Heads','Tails'];
const msg = document.querySelector('.message');
let score = [0,0];


const playerGuess = document.querySelectorAll('button');
for(let i = 0; i < playerGuess.length; i++){
    playerGuess[i].addEventListener('click',function(){
        console.log(i);
        winner(i);
    });
} 

function winner(playersChoose){
    let flip = toss();
    if(flip == playersChoose){
        score[0]++;
        msg.innerHTML = '<h3>Player Won <br> Player: '+score[0] +' Computer '+ score[1] +'</h3>';
        console.log('Player wins');
    }else{
        score[1]++
        msg.innerHTML = '<h3>Computer Won <br> Player: '+score[0] +' Computer '+ score[1] +'</h3>';
        console.log('Computer Wins');
    }
}

function toss(){
    let toss = Math.floor(Math.random() * coinArray.length);
    return toss // if 0 == heads, if 1 == tails
}
