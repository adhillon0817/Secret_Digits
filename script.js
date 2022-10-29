// What sort of data does my application need to work?

// Storing all needed characters in variables.
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "|", "[", "]"]

// What sorts of actions does my code need to complete? 

// Generate a password 
function generatePassword() {
  var passwordLength;
  var special;
  var uppercase;
  var lowercase;
  var number; 
passwordLength=window.prompt("How long would you like your password to be?")
 // If passwordLength >= 8 and passwordLength is <= 128;
 //day one activ. 10
 if (passwordLength >= 8 && passwordLength <= 128) {

  // Prompt user for if they want a special characters and store it in a variable 
  special = window.confirm( "Do you want special characters?\n(Ok-Yes, Cancel-No)" );

  // Prompt user for if they want a numbers and store it in a variable 
  number = window.confirm( "Do you want numbers?\n(Ok-Yes, Cancel-No)" );

  // Prompt user for if they want a lowercase and store it in a variable 
  lowercase = window.confirm( "Do you want lowercase letters?\n(Ok-Yes, Cancel-No)" );

  // Prompt user for if they want a uppercase and store it in a variable 
  uppercase = window.confirm( "Do you want uppercase letters?\n(Ok-Yes, Cancel-No)" );


  //Randomly select characters 

// validate that at least one character choice is true
if (!passwordLength && !special && !uppercase && !lowercase && !number ){
  //Alert the user they need to try again.
  return "Please select Yes to at least one of the requirements\n(Ok-Yes)";
}

//Declare a new empty array to store the characters we went to use.

var charactersArray = [];


// IF specialCharacters is true 
  // concat
if (special) {
  charactersArray = charactersArray.concat(specialCharacters);
}

if (uppercase) {
  charactersArray = charactersArray.concat(uppercaseCharacters);
}

if (lowercase) {
  charactersArray = charactersArray.concat(lowercaseCharacters);
  
}

if (number) {
  charactersArray = charactersArray.concat(numbers)
}

//Randomly select characters from charactersarray until you reach desired password length
for (var i=0; i<charactersArray.length; i++ ) {
  charactersArray += Math.floor(Math.random() * data.length);
};

 }
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
