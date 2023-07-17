let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let firstButton=document.getElementById('button');
let secondButton=document.getElementById('second-button');
let firstEmailInput=document.getElementById('email-input');
let secondEmailInput=document.getElementById('second-email-input');

firstButton.addEventListener('click', checkFirstEmail)
 function checkFirstEmail(){
    const email=firstEmailInput.parentElement;
    const errorMessage=email.querySelector('small');
    if(!firstEmailInput.value.match(pattern)){
    firstEmailInput.style.borderColor="red"
    errorMessage.style.visibility="visible"
}
   else{
    firstEmailInput.style.borderColor=""
    errorMessage.style.visibility="hidden"
   }
 }

 secondButton.addEventListener('click',checkSecondEmail);
 function checkSecondEmail(){
    const email=secondEmailInput.parentElement;
    const errorMessage=email.querySelector('small');
    if(!secondEmailInput.value.match(pattern)){
    secondEmailInput.style.borderColor="red"
    errorMessage.style.visibility="visible"
}
   else{
    secondEmailInput.style.borderColor=""
    errorMessage.style.visibility="hidden"
   }
 }