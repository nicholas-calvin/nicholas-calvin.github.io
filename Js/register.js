const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const fullname = document.getElementById("firstname");
const email = document.getElementById("email");
const checkbox = document.getElementById("agreeBox");

function validateEmail(email) {
  var re = /\S+@\S+/;
  return re.test(email);
}

const submitForm = (event) => {
  event.preventDefault();
  if (username.value.length === 0) {
    alert("Username must not be empty");
  } else if (password.value.length < 12) {
    alert("Password must be longer than 12 characters");
  } else if (confirmpassword.value.length !== password.value.length) {
    alert("Password does not match");
  } else if (fullname.value.length === 0) {
    alert("Fullname must not be empty");
  } else if (!check()) {
    alert("You must pick your gender");
  } else if (!validateEmail(email.value)) {
    alert("Email must contain @");
  } else if (!checkbox.checked) {
    alert("You must agree to our terms & conditions");
  }
};

function check() {
  return (
    document.getElementById("male").checked ||
    document.getElementById("female").checked
  );
}
