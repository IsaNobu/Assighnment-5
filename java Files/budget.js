function expensesValue(setValue) {
    const getExpensesValueField = document.getElementById('expenses');
    const getExpensesValue = getExpensesValueField.innerText;
    parseFloat(getExpensesValue);

    const getPersonValueField = document.getElementById('person-value');
    const getPersonValue = getPersonValueField.value;
    const trunPersonInt = parseInt(getPersonValue);

    let newNum;
    if(setValue === true){
        newNum = trunPersonInt * 5;
    }

    const num = getExpensesValueField.innerText = newNum;
    
    return num
}


document.getElementById('cal').addEventListener('click', function(){
    expensesValue(true);
});

document.getElementById('cal-total').addEventListener('click', function(){
    const getManagerField = document.getElementById('mgn-field');
    const getManagerValue = getManagerField.value;
    const managerInt = parseFloat(getManagerValue);
    
    const getCoachField = document.getElementById('Coach-field');
    const getCoachValue = getCoachField.value;
    const coachInt = parseFloat(getCoachValue);

    const getFinalTotalField = document.getElementById('final-total');
    const getFinalTotalValue = getFinalTotalField.innerText;
    parseFloat(getFinalTotalValue);

    const makeTotal = managerInt + coachInt;

    const getValue = expensesValue(true);

    const finalTotal =  getValue + makeTotal;

    getFinalTotalField.innerText = finalTotal;
});