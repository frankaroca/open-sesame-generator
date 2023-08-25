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

 