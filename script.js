// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var uppperLetters = letters.split("")
var Lowercase = letters.toLowerCase().split("")

var usedChars = []
console.log(uppperLetters)
console.log(Lowercase)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var length = prompt ("Select a Password between 8 & 14 Characters")
  console.log(length)
  var confirmNumbers = confirm ("Would you like Numbers in your Password?")
  var confirmUppercase = confirm ("Would you Like Uppercase?")
  var confirmLowercase = confirm ("Would you like Lowercase?")
  var confirmSpecialCharacters = confirm ("Would you like Special Character? ")

  var password = ""

  if (confirmNumbers){
    usedChars = [...usedChars, ...numbers]
    console.log(usedChars)
  }

  if (confirmUppercase){
    usedchars = [...usedChars, ...uppperLetters]
  }

  if(confirmLowercase)[
    usedChars = [...usedChars, ...Lowercase]
  ]


//loop over userChars for however long the password length is 
//selecct a random char from usedChars to add to our password



//outside of for loop
//return password

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
