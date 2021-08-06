const loginForm = document.getElementById("login_form");
const loginInput = document.getElementById("login_input");
const loginButton = document.getElementById("login_btn");
const login_section = document.querySelector(".login-section");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const SHOW_CLASSNAME = "show";
const USERNAME_KEY = "userName";


function onLoginSubmit(event){
    event.preventDefault();
    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    paintGreetings(userName);
}

function paintGreetings(userName){
    login_section.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `HI, ${userName.toUpperCase()} ✱`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
login_section.classList.add(HIDDEN_CLASSNAME);

if(savedUserName === null){
    //show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} 
else {
    paintGreetings(savedUserName);
}

