function validateEmail(email) {
  if (email.trim() === "") return "Email is required";

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) return "Invalid email format";

  return "";
}

function validatePassword(password) {
  if (password.trim() === "") return "Password is required";
  if (password.length < 8) return "Min 8 characters";
  if (!/[A-Z]/.test(password)) return "Needs uppercase letter";
  if (!/[0-9]/.test(password)) return "Needs a number";

  return "";
}

function showResult(elementId, message) {
  const el = document.getElementById(elementId);

  if (message === "") {
    el.textContent = "✅ Valid";
    el.className = "success";
  } else {
    el.textContent = "❌ " + message;
    el.className = "error";
  }
}

function validateSignup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const emailErr = validateEmail(email);
  const passwordErr = validatePassword(password);

  showResult("signupEmailMsg", emailErr);
  showResult("signupPasswordMsg", passwordErr);

  console.log(`validateEmail("${email}") →`, emailErr || '"" (valid)');
  console.log(`validatePassword("${password}") →`, passwordErr || '"" (valid)');
}

function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const emailErr = validateEmail(email);
  const passwordErr = validatePassword(password);

  showResult("loginEmailMsg", emailErr);
  showResult("loginPasswordMsg", passwordErr);

  console.log(`validateEmail("${email}") →`, emailErr || '"" (valid)');
  console.log(`validatePassword("${password}") →`, passwordErr || '"" (valid)');
}