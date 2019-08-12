
const game = new DiceGame();

const roll = document.createElement('button');
roll.textContent = "Roll here";
roll.style.fontSize = "30px";
roll.style.width = "400px";
roll.style.height = "200px";
roll.style.backgroundColor = "yellowgreen";
document.body.appendChild(roll);

roll.addEventListener('click', function(){
    let p1 = game.roll();
    let p2 = game.roll();
    let winner = game.winner(p1,p2);
    console.log(winner);
    roll.innerHTML = `Player1 <b>${p1}</b> vs Player2 <b>${p2}</b> <br> <b>${winner}<b>`;
});

function DiceGame() {
    
    this.roll = function(){
        return Math.floor(Math.random() * 6 +1)
    };

    this.winner = function(roll1, roll2) {
        if(roll1 > roll2) {
            return 'Player 1 Wins'
        } else if(roll2 > roll1) {
            return 'Player 2 Wins'
        }else {
            return "Tie";
        }
    }
};


    


