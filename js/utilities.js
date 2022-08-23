// console.log('utilies.js');

function createElementWithValue(elementId) {
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;

    const elementCreate = document.getElementById('create-element');
    let numb = elementCreate.childElementCount + 1;

    const list = document.createElement('li');
    list.innerText = textFieldString;
    if (numb < 6) {

        elementCreate.appendChild(list);
    }
    else {
        alert("you cant select more than 5 players");

    }

}

function toDisabled(elementId) {
    const button = document.getElementById(elementId);
    const totalElement = document.getElementById('create-element');
    let numb = totalElement.childElementCount;

    if (numb < 6 && numb >= 1) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
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