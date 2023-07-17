const passwordBox = document.getElementById('Password');
const length=10;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%_&<>";

const allIn=upperCase+lowerCase+number+symbol;

function createPassword(){

    let password ="";

    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allIn[Math.floor(Math.random()*allIn.length)];
    }
    passwordBox.value=password;
   
}

let popup=document.getElementById("popup");
function openPopup(){
    passwordBox.select();
    document.execCommand("copy");
    popup.classList.add("open-popup");
    
}

function closePopup(){
    popup.classList.remove("open-popup");
    
}