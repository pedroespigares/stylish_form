let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let phoneRegularExpression = new RegExp("^\\d{9}$");
  let phoneInput = document.getElementById("phone");
  let phone = phoneInput.value;
  let phoneResult = phoneRegularExpression.test(phone);

  let emailRegularExpression = new RegExp(
    "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
  );
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  let emailResult = emailRegularExpression.test(email);

  let passwordRegularExpression = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  let passwordInput = document.getElementById("password");
  let password = passwordInput.value;
  let passwordResult = passwordRegularExpression.test(password);

  let confirmPasswordInput = document.getElementById("confirmPassword");
  let confirmPassword = confirmPasswordInput.value;

  let success = document.getElementById("success");

  let container = document.getElementById("container");

  if (!emailResult) {
    emailInput.style.border = "red solid 1px";
  } else {
    emailInput.removeAttribute("style");
  }

  if (!phoneResult) {
    phoneInput.style.border = "red solid 1px";
  } else {
    phoneInput.removeAttribute("style");
  }

  if (!passwordResult) {
    passwordInput.style.border = "red solid 1px";
  } else {
    passwordInput.removeAttribute("style");
  }

  if (password != confirmPassword) {
    confirmPasswordInput.style.border = "red solid 1px";
  } else {
    confirmPasswordInput.removeAttribute("style");
  }

  if (
    phoneResult &&
    emailResult &&
    passwordResult &&
    password == confirmPassword
  ) {
    success.style.backgroundColor = "#d2ffd2";
    success.style.color = "green";
    success.style.padding = "10px";
    success.innerHTML = "Sign up completed!";
    return true;
  } else {
    success.removeAttribute("style");
    success.innerHTML = "";
    return false;
  }
});
