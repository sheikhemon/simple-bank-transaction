// handle deposit btn
document.getElementById('btn-deposit').addEventListener('click', function() {
    // get the amount deposit 
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    depositInput.value = '';
    // add deposit 
    const addDeposit = document.getElementById('add-deposit');
    const previousDeposit = addDeposit.innerText;
    const newDeposit = parseFloat(previousDeposit)  + depositAmount;
    addDeposit.innerText = newDeposit;
    // update account balance 
    const addTotalBalance = document.getElementById('add-total-balance');
    const previousBalance = parseFloat(addTotalBalance.innerText);
    const newBalanceAmount = previousBalance + depositAmount;
    addTotalBalance.innerText = newBalanceAmount;
});

// handle withdraw with event handler 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    withdrawInput.value = '';

    // add withdraw
    const addWithdraw = document.getElementById('withdraw-total');
    const previousWithdraw = addWithdraw.innerText;
    const newWithdraw = parseFloat(previousWithdraw) + withdrawAmount;
    addWithdraw.innerText = newWithdraw;

    // update withdraw
    const withdrawTotal = document.getElementById('add-total-balance');
    const withdrawBalance = parseFloat(withdrawTotal.innerText);
    const newWithdrawAmount = withdrawBalance - withdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;
})