// Assignment Code
const generateBtn = document.querySelector("#generate");

// Character sets to be used in password generation
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

// Function to generate a random character from a given string
function getRandomCharacter(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

// Function to generate the password
function generatePassword() {
  const password = "";
  const passwordLength = parseInt(prompt("Enter the desired password length:"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  const useLowercase = confirm("Include lowercase characters?");
  const useUppercase = confirm("Include uppercase characters?");
  const useNumeric = confirm("Include numeric characters?");
  const useSpecial = confirm("Include special characters?");

 
