
/*
............................................................
............................................................
createElementWithValue() is a common function for all select
button. It is also common function for all disabled method.
............................................................
.............................................................
*/
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
        button.style.backgroundColor = 'gray';
        button.style.color = 'lightsteelblue';
    }
    else {
        alert("you cant select more than 5 players");
    }
}



/*
............................................................
............................................................
toCalculate() is a common function for all select players cost. 
It is also common function for validation.
............................................................
.............................................................
*/

function toCalculat() {
    const totalElement = document.getElementById('create-element');
    let numb = totalElement.childElementCount;

    const perPlayerField = document.getElementById('player-input-field');
    const perPlayerFieldCostString = perPlayerField.value;
    const perPlayerFieldCost = parseFloat(perPlayerFieldCostString);
    if (isNaN(perPlayerFieldCost) || perPlayerFieldCost < 0) {
        alert('Please input a valid number.');
        return;
    }
    let playerTotalCost;
    if (numb === 0) {
        alert('You haven not selected any player!!!')
        return 0;
    }
    else if (numb < 6) {
        playerTotalCost = numb * perPlayerFieldCost;
    }

    const playerExpense = document.getElementById('player-expenses');
    playerExpense.innerText = playerTotalCost;
    return playerTotalCost;
}




/*
............................................................
............................................................
totalCalculate() is a common function used to players cost,
manager cost and coach cost totally calculation. 
It is also common function for validation.
............................................................
.............................................................
*/

function totalCalculat() {
    const playerTotalCost = toCalculat();

    const managerField = document.getElementById('manager-input-field');
    const managerFieldString = managerField.value;
    const managerCost = parseFloat(managerFieldString);

    const coachField = document.getElementById('coach-input-field');
    const coachFieldString = coachField.value;
    const coachCost = parseFloat(coachFieldString);
    if (isNaN(managerCost) || managerCost < 0 || isNaN(coachCost) || coachCost < 0) {
        alert('Please input a valid number.');
        return;
    }

    const totalCost = playerTotalCost + managerCost + coachCost;

    const totalField = document.getElementById('total');
    totalField.innerText = totalCost;
}



/*
............................................................
............................................................
reset() is a common function for all select players reset. 
............................................................
.............................................................
*/

function reset() {
    const elementCreate = document.getElementById('create-element');
    elementCreate.innerHTML = '';
}