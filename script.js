// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets to be used in password generation
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

// Function to generate a random character from a given string
function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// Function to generate the password
function generatePassword() {
  var password = "";
  var passwordLength = parseInt(prompt("Enter the desired password length:"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character set to include.");
    return "";
  }
    
  var availableChars = "";
    //validation for every character permitted
    
  if (useLowercase) {
    availableChars += lowercaseChars;
  }
  if (useUppercase) {
    availableChars += uppercaseChars;
  }
  if (useNumeric) {
    availableChars += numericChars;
  }
  if (useSpecial) {
    availableChars += specialChars;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(availableChars);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
