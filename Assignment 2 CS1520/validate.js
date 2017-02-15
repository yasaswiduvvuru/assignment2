function validateMath() {
	var z = document.forms["arr"]["arithanswer"].value;
	if (z == ""){
		alert("An empty answer is futile!");
		return false;
	}
	if (z == "5"){
		alert("Correct!");
	}
	else {
		alert("Incorrect! Must MATH HARDER!!!");
	}
}
function validateBook() {
	var b = document.forms["book"]["bookname"].value;
	if (b == ""){
		alert("An empty answer is futile!");
		return false;
	}
	if (b.toUpperCase() == "HAT"){
		alert("Correct!");
	}
	else {
		alert("Incorrect! DOGS > CATS!!!");
	}
}