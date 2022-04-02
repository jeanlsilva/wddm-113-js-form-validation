const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password");
const error = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  checkInputs();
});

function checkInputs(params) {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (usernameValue === "") {
    setError(username, "Error: username cannot be empty");
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "Error: password cannot be empty");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Error: confirm password cannot be empty")
  } else if (passwordValue !== confirmPasswordValue) {
    setError(confirmPassword, "Error: passwords do not match");
  } else {
    setSuccess(confirmPassword)
  }
} 

function setError(input, message) {    
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}