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
