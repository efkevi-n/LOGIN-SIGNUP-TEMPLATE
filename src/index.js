const loginOption = document.getElementById("lig"),
 home = document.querySelector(".home"),
 formContainer = document.querySelector(".container"),
 formClosebtn = document.getElementById("fttt"),
 signUpbtn = document.getElementById("sign"),
 loginBtn = document.getElementById("log"),
 pwHide = document.querySelector(".pw_hide");

loginOption.addEventListener("click", () => home.classList.toggle("show"));
formClosebtn.addEventListener("click", () => home.classList.remove("show"));


signUpbtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
});



loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active")
});