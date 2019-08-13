const output = document.createElement('div');
document.body.appendChild(output);

const output1 = document.createElement('div');
document.body.appendChild(output1);

const itemName = document.createElement('input');
itemName.setAttribute('type','text');
output.appendChild(itemName);
itemName.placeholder = "Item name";

const itemCost = document.createElement('input');
itemCost.setAttribute('type','number');
output.appendChild(itemCost);
itemCost.placeholder = "Cost";

const itemAdd = document.createElement('button');
document.body.appendChild(itemAdd);
itemAdd.style.height = "20px";
itemAdd.style.width = "100px";
itemAdd.style.borderRadius = "2px";
itemAdd.style.marginLeft = "5px";
itemAdd.textContent = "Add Item";
itemAdd.addEventListener('click',addItem);

const outputCart = document.createElement('button');
document.body.appendChild(outputCart);
outputCart.style.height = "20px";
outputCart.style.width = "100px";
outputCart.style.borderRadius = "2px";
outputCart.style.marginLeft = "5px";
outputCart.textContent = "Total";
outputCart.addEventListener('click', function(){
    let temp = cart.totalCost();
    console.log(temp);
})

const items = [];
const cart = new ShoppingCart();

window.onload = function(){
    itemName.value = "Milk";
    itemCost.value = 2;
    addItem();

    itemName.value = "Bread";
    itemCost.value = 3;
    addItem();

    itemName.value = "Meat";
    itemCost.value = 12;
    addItem();
}

function ShoppingCart() {
    const myList = {};

    this.lister = function(){
        console.log(myList);
    }

    this.totalCost = function(){
        let total = 0;
        for(let pro in myList){
            let subTotal = myList[pro].subTotal();
            total += subTotal;
        }
        return total;
    }

    this.output = function(){
        let total = 0;
        output1.innerHTML = "";
        for(let pro in myList){
            let subTotal = myList[pro].subTotal();
            let el = myList[pro];
            output1.innerHTML += `${el.name} $${el.price} X ${el.qty} = $${subTotal}<br>`;
            total += subTotal;
        }
        output1.innerHTML +=`<b>Final Total $${total}</b>`;
    }
    this.adder = function(item, cost){
        let namer = item.toLowerCase();
        if(!myList[namer]){
            myList[namer] = {
                name:item,
                price:cost,
                qty:1,
                subTotal:function(){
                    return this.price * this.qty;
                }
            }
        }else{
            myList[namer].qty++;
        }
    }
}

function Item(name,cost){
    this.name = name;
    this.cost = cost;
    this.withTax = function(){
        return (this.cost * 1.15).toFixed(2);
    }
    this.shipping = function(){
        return (this.cost * 1.05).toFixed(2);
    }
}

function addItem(){
    let tempName = itemName.value||"test1";
    let tempValue = itemCost.value||1;
    let tempItem = new Item(tempName,tempValue);
    items.push(tempItem);
    console.log(items);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${tempName}</h3>$${tempValue}`;
    div.style.border = "1px solid #eee";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.addEventListener('click',function(){
        cart.adder(tempName,tempValue);
        cart.output();
    });
    div.tempName = tempName;
    div.tempValue = tempValue;
    document.body.appendChild(div);
    itemName.value ="";
    itemCost.value ="";
    
}

