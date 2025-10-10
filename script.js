const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

const alphaNumeric = upperCase + lowerCase + numbers;
const allCharacters = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = ""; // Reset password
  // Ensure at least one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}

function alphaNumericToggle() {
  const checkbox = document.getElementById("alphaNumeric");
  console.log("Checkbox toggled:", checkbox.checked);

  if (checkbox.checked) {
    let password = ""; // Reset password
    // Ensure at least one uppercase, one lowercase, and one number
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (password.length < length) {
      password += alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
    }
    passwordBox.value = password;
  } else {
    generatePassword();
  }
}
