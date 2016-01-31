function reverseString(inputString) {
	var outputString = "";
	for(var i = inputString.length - 1; i >= 0; i--) {
		var currentChar = inputString[i];
		outputString += currentChar;
	}
	return outputString;
}