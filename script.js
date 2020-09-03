//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Ask the user a series of questions
// a) length of password (numeric input)
// b) validate length is between 8 and 128 characters
// c) type of characters to include - special characters, uppercase, lowercase, numeric (series of yes/no confirms)
// d) validate the user selected at least one character type

//Any invalid response will terminate password generation and the user must start over.

//Once th user entered valid responses, generate a password that meets their criteria and display it on the box.
