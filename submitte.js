// step-01: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){
// setp02:get the amount from the deposit-field


const depositfield =document.getElementById('deposit-field');
const newDepositeAmountString =depositfield.value;
const newDepositeAmount =parseFloat(newDepositeAmountString);


// setp-03:get the deposite total 


const depositTotalElemnt =document.getElementById('deposite-total');

const previousDepositTotalString  = depositTotalElemnt.innerText;

const previousDepositTotal =parseFloat(previousDepositTotalString);

// step-04:add number to set the deposit


const currentDepositeTotal =previousDepositTotal+newDepositeAmount;


depositTotalElemnt.innerText = currentDepositeTotal;

// step-05:get balnace current total

const balanceTotalElement =document.getElementById('balance-total');
const previusBalanceTotalSttring =balanceTotalElement.innerText;
const previusBalanceTotal =parseFloat(previusBalanceTotalSttring);

// step-06:calcilate total balance
const currentBalanceTotal = previusBalanceTotal+newDepositeAmount;

// set the balance total 
balanceTotalElement.innerText =currentBalanceTotal;

// step07:clear the deposit-field


depositfield.value = '';



})