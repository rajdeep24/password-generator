//Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCaseLetters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
var upperCaseLetters = [
	"A", //
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

var charBank = [];

function generatePassword() {
	//Ask the user for the length of password
	var charLength = prompt("How many characters would you like in your password (8-128)?");

	//Validate the character length is between 8 and 128
	//If it's greater than 128 or if it's less than 8, fail validation - Create a conditional for this scenario
	if (charLength > 128 || charLength < 8) {
		alert("Invalid character length");
		return;
	}

	//Ask the users a series of yes/no confirms for special characters, uppercase, lowercase, numeric

	var useSpecialCharacters = confirm("Would you like special characters?");

	var useUpperCaseCharacters = confirm("Would you like uppercase characters?");

	var useLowerCaseCharacters = confirm("Would you like lowercase characters?");

	var useNumericCharacters = confirm("Would you like numeric characters?");

	//Validate the user selected at least one character type
	//If none of these are true - return
	if (
		!useSpecialCharacters &&
		!useUpperCaseCharacters &&
		!useLowerCaseCharacters &&
		!useNumericCharacters
	)
		return;

	// generate a bank of characters based on the users selection of confirm statements

	if (useSpecialCharacters) charBank.concat(specialChars);
	if (useUpperCaseCharacters) charBank.contact(upperCaseLetters);
	if (useLowerCaseCharacters) charBank.contact(lowerCaseLetters);
	if (useNumericCharacters) charBank.contact(numbers);
	// generate a password of length charLength
	// repeatedly pick a random character until we have the appropriate length

	for (var i = 0; i < charLength; i++) {}

	return "password";
}

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
