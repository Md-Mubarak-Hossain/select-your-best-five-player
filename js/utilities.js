// console.log('utilies.js');

function createElementWithValue(elementId, btn) {
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;

    const elementCreate = document.getElementById('create-element');
    let numb = elementCreate.childElementCount + 1;

    const list = document.createElement('li');
    list.innerText = textFieldString;
    const button = document.getElementById(btn);
    if (numb < 6) {

        elementCreate.appendChild(list);
        button.disabled = true;
    }
    else {
        alert("you cant select more than 5 players");

    }

}


function toCalculat() {
    const totalElement = document.getElementById('create-element');
    let numb = totalElement.childElementCount;

    const perPlayerField = document.getElementById('player-input-field');
    const perPlayerFieldCostString = perPlayerField.value;
    const perPlayerFieldCost = parseFloat(perPlayerFieldCostString);
    let playerTotalCost;
    if (numb < 6) {
        playerTotalCost = numb * perPlayerFieldCost;
    }

    const playerExpense = document.getElementById('player-expenses');
    playerExpense.innerText = playerTotalCost;
    return playerTotalCost;
}

function totalCalculat() {
    const playerTotalCost = toCalculat();

    const managerField = document.getElementById('manager-input-field');
    const managerFieldString = managerField.value;
    const managerCost = parseFloat(managerFieldString);

    const coachField = document.getElementById('coach-input-field');
    const coachFieldString = coachField.value;
    const coachCost = parseFloat(coachFieldString);

    const totalCost = playerTotalCost + managerCost + coachCost;

    const totalField = document.getElementById('total');
    totalField.innerText = totalCost;
}


function reset() {
    const elementCreate = document.getElementById('create-element');
    elementCreate.innerHTML = '';
}