
const btn = document.querySelector('button');
const cost = document.querySelector('input');
const output = document.querySelector('h2');
console.log(cost);
btn.addEventListener('click',function(){
    const tip = calculate(cost.value);
    output.innerText = `You should tip $${tip} on $${cost.value}`;
    cost.value ="";
});

function calculate(num){
    return (num * 0.15).toFixed(2);
}

