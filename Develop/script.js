// Assignment code here

// Variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";

var generatePassword = function() {
  // length
  var length = ""
    while (length === "" || length === null){
  var passwordLength = prompt("How many characters would you like your password to contain? Please choose a number between 8-128.");

  if (isNaN(passwordLength) || passwordLength > 129 || passwordLength < 8 || passwordLength === null) {
    window.alert("Entry was not valid. Please choose a number between 8-128.");}
    else { length = passwordLength; 
    console.log("Password length is " + length);}
    }

  // choose your character
  var upperChar, lowerChar, numberChar, specialChar;

  while (!upperChar && !lowerChar && !numberChar && !specialChar) {
    upperChar = window.confirm("To use uppercase letters, click OK.");
      if (upperChar) {console.log("include uppercase letters");}
        else { console.log("do not include uppercase letters")};

    lowerChar = window.confirm("To use lowercase letters, click OK.");
      if (lowerChar) {console.log("include lowercase letters");}
        else {console.log("do not include lowercase letters");
      }

    numberChar = window.confirm("To use numbers, click OK.");
      if (numberChar) {console.log("include numbers");}
        else {console.log("do not include numbers");
      }
    
    specialChar = window.confirm("To use special characters, click OK.");
      if (specialChar) {console.log("include special characters");}
        else {console.log("do not include special characters");
      }
    
    if (!upperChar && !lowerChar && !numberChar && !specialChar) {window.alert("Please choose at least one type character")}
  };

    var userInput = "";
    if (upperChar) {
      userInput += upperCase.toUpperCase}
    if (lowerChar) {
      userInput += lowerCase.toLowerCase}
    if (numberChar) {
      userInput += numbers};
    if (specialChar) {
     userInput += special};
    
  var password = ""

  for (var i = 0; i < length; i++) {
    var randomChar = userInput.charAt(Math.floor(Math.random() * userInput.length));

    password += randomChar;
  }

  return password; 
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
