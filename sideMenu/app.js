const menubtn = document.querySelector('p');
const menuContainer = document.querySelector('.menu');
const listItem = document.querySelectorAll('.links');
for(let i = 0; i < listItem.length;i++){
    listItem[i].addEventListener('click',function(){
        console.log(this);  
    });
}
menubtn.addEventListener('click',hide);

function hide(){
    menuContainer.classList.toggle('active');
}
   


