
// step-1 add click event handler with the submite button


document.getElementById('btn-submite').addEventListener('click',function(){
//    step-2 get the email address inside the email input field

// always remember to use .value to get text form an input field

   const emilFiled = document.getElementById('user-email');
   const email = emilFiled.value;
//   step-3 get password 
// set id on the html element 
// get the element 
// get the value form the element 

const passwordField = document.getElementById('user-password');
const password = passwordField.value;


if(email === 'sontan@gmail.com' && password === 'secret'){
   window.location.href ='bank.html' ;
}
else{
   alert('invalid user');
}

})