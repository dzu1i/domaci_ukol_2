function getUserInput() {
    const input = Number(document.getElementById("userInput").value);
    if (input < 0) {
        alert("Please enter a number that is 0 or greater.");
        return;
    }

    convertNumber(input);
}

function convertNumber(num) {
    let numberToConvert = num; 
    let convertedNumber="";
    let remainder;

    if (numberToConvert == 0) {
        alert(numberToConvert);
    }
    else {
        while (numberToConvert > 0) {
            remainder = numberToConvert%2;
            convertedNumber = remainder + convertedNumber;
            numberToConvert = Math.floor(numberToConvert / 2);
        }
        alert(Number(convertedNumber))
    }
    
    
}