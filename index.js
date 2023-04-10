const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const close = document.querySelector(".close");
const closewindow = document.querySelector(".close-window");

const loginsection = document.querySelector(".login");
const registersection = document.querySelector(".register");

const forgotsection = document.querySelector(".forgot");

register.addEventListener("click" , (e)=>{
         loginsection.style.display = "none";
         registersection.style.display = "flex";
})


login.addEventListener("click" , (e)=>{
    loginsection.style.display = "flex";
    registersection.style.display = "none";
})

forgot.addEventListener("click" , (e)=>{
    loginsection.style.display = "none";
    
    forgotsection.style.display = "flex";
    
})
close.addEventListener("click" , (e)=>{
    forgotsection.style.display = "none";
    loginsection.style.display = "flex";
    
})

