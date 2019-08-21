const input = document.querySelector('input');
console.log(input);
const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click',function(){
    let name = input.value;
    let output = document.createElement('div');
    output.style.fontSize = "30px";
    output.innerHTML = `<h3> Hello welcome, ${name}`;
    input.before(output);
    input.value = "";
});