const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector(".login-btn");

username.addEventListener("keyup", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }
});

username.addEventListener("keyup", () => {
    if (email.value == "") {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  });

password.addEventListener("keyup", () => {
  if (password.value == "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  }
  if (password.value == "") {
    passwordError.style.display = "block";
  }
  else{
      usernameError.style.display = 'none';
      passwordError.style.display = "none";
      let cred = {
          userName: `${username.value}`,
          password: `${password.value}`
      }

      console.log(cred);

  }
});