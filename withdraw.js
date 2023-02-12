


document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    
    const newWithdrawAmountString =withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString) ;


    const withdrawTotalElement = document.getElementById('withdrawTotal');

    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    
    const previusWithdrawTotal =parseFloat(previusWithdrawTotalString);

   
    const currentWithdrawTotal = previusWithdrawTotal +newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalELement = document.getElementById('balance-total');
    const previusBalanceTotalSttring = balanceTotalELement.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceTotalSttring);


    const newBalanceTotal = previusBalanceTotal -newWithdrawAmount;;
    balanceTotalELement.innerText = newBalanceTotal;

    withdrawField.value = '';









})