const password = document.querySelector("#confrim_password")
const og_password = document.querySelector("#password")
const submit = document.querySelector("#submit")
const input = document.querySelectorAll("input") 

submit.addEventListener("click", (event) => {
    input.forEach((value) => {
        if (!value.validity.valid) {
            value.classList.add("error")
        }

        else {
            value.classList.remove("error")
        }
    })

    if (og_password.value.length != 0)
    {
      if (password.value != og_password.value) {
      password.setCustomValidity("Passwords dont match");
    
      password.classList.add("error")
    } 

    else {
      password.setCustomValidity("");
      password.classList.remove("error")
      og_password.classList.remove("error")
    }   

    } 


});



