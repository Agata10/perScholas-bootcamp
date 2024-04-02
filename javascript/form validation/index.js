const regForm = document.getElementById("registration");
const nameInput = document.getElementById("username");
const emailInput = regForm.elements["email"];
const passwordInput = regForm.elements["password"];
const confPassInput = regForm.elements["passwordCheck"];
const checkbox = regForm.elements["terms"];
const error = document.getElementById("errorDisplay");

regForm.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  const validName = valName();
  const validEmail = valEmail();
  const validPass = valPassword();
  if (!validEmail) {
    return;
  }
  if (!validPass) {
    return;
  }
  if (!validName) {
    return;
  }

  if (!checkbox.checked) {
    setErrorMsg("Terms has to be accepted.", checkbox);
    return;
  }

  error.style.display = "";
  localStorage.setItem("username", validName.toLowerCase());
  localStorage.setItem("email", validEmail.toLowerCase());
  localStorage.setItem("password", validPass);
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confPassInput.value = "";
  checkbox.checked = false;
  alert("Registred!");
}

function valName() {
  let pattern = /^\d*[a-zA-Z][a-zA-Z\d]*$/;
  let uniquePatetrn = /.*([a-zA-Z])(?!\1).*([a-zA-Z]).*/;
  if (nameInput.value === "") {
    setErrorMsg("Please enter username.", nameInput);
    return false;
  } else if (
    nameInput.value.toLowerCase() === localStorage.getItem("username")
  ) {
    setErrorMsg("Username already taken.", nameInput);
    return false;
  } else if (nameInput.value.length < 4) {
    setErrorMsg("Please enter at least 4 characters", nameInput);
    return false;
  } else if (!pattern.test(nameInput.value)) {
    setErrorMsg("It cannot have special characters or whitespace", nameInput);
    return false;
  } else if (!uniquePatetrn.test(nameInput.value)) {
    setErrorMsg("At least two unique characters", nameInput);
  } else {
    return nameInput.value;
  }
}

function valEmail() {
  let pattern = /^\w+@\w+.\w+$/;
  if (!pattern.test(emailInput.value)) {
    setErrorMsg("Please enter correct email", emailInput);
    return false;
  } else if (emailInput.value.includes("example.com")) {
    setErrorMsg("Please enter other domain than 'example.com'", emailInput);
    return false;
  } else {
    return emailInput.value;
  }
}

function valPassword() {
  let pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{12,}(?<!password)(?<!username)$/;
  if (passwordInput.value.length < 12) {
    setErrorMsg("Please enter more than 12 characters'", passwordInput);
    return false;
  } else if (pattern.test(passwordInput.value)) {
    setErrorMsg(
      "It has to have one upper and one lowercase letter, can't contain username and 'password'",
      passwordInput
    );
    return false;
  } else if (confPassInput.value !== passwordInput.value) {
    setErrorMsg("Password do not match", confPassInput);
  } else {
    return passwordInput.value;
  }
}

function setErrorMsg(msg, input) {
  error.style.display = "block";
  error.textContent = msg;
  input.focus();
}

/*LOGIN*/
const form = document.getElementById("login");
const userLogin = form.elements["username"];
const passLogin = form.elements["password"];
const logIn = form.elements["persist"];

form.addEventListener("submit", validateLogin);

function validateLogin(e) {
  e.preventDefault();

  if (userLogin.value.toLowerCase() !== localStorage.getItem("username")) {
    setErrorMsg("Invalid username", userLogin);
    return;
  }

  if (passLogin.value !== localStorage.getItem("password")) {
    setErrorMsg("Invalid password", passLogin);
    return;
  }

  if (logIn.checked) {
    alert("You will be logged in!");
  }

  alert("Loged correctly!");
}
