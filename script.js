

const billTotal = document.getElementById('billTotalInput');
const tip = document.getElementById('tipInput');
const people = document.getElementById('peopleNum');
// const incButton = document.getElementById('increaseBtn');
// const decButton = document.getElementById('decreaseBtn');
const perPersonTotal = document.getElementById('perPersonTotal');



let numOfPeople = Number(people.innerText);

const calculateBill = () =>{
    const bill = Number(billTotal.value);
    const tipPrecentage = Number(tipInput.value) / 100;
    const tipAmount = tipPrecentage * bill;
    const total = tipAmount + bill;
    const perPerson = total / numOfPeople;
    perPersonTotal.innerText = perPerson.toFixed(2);
}

const increasePeople = () =>{
    numOfPeople += 1;
    people.innerText = numOfPeople;
    calculateBill();
}

const decreasePeople = () =>{
    if(numOfPeople <= 1){
        return
    }
    else{
        numOfPeople -= 1;
    }
    people.innerText = numOfPeople;
    calculateBill();
}