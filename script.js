let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";
let restartBtn = document.getElementById("restartButton");
let checkBtn = document.getElementById("checkButton");
let fR = Math.ceil(Math.random() * 100);
let sR = Math.ceil(Math.random() * 100);
firstNumber.textContent = fR;
secondNumber.textContent = sR;
restartBtn.onclick = function() {
    fR = Math.ceil(Math.random() * 100);
    sR = Math.ceil(Math.random() * 100);
    firstNumber.textContent = fR;
    secondNumber.textContent = sR;
    document.getElementById("gameResult").textContent = '';
    document.getElementById("userInput").value = '';
}
checkBtn.onclick = function() {
    let sum = fR + sR;
    let usum = parseInt(document.getElementById("userInput").value);
    if (sum === usum) {
        document.getElementById("gameResult").textContent = successMessage;
        document.getElementById("gameResult").style.backgroundColor = 'green';
    } else {
        document.getElementById("gameResult").textContent = tryAgainMessage;
        document.getElementById("gameResult").style.backgroundColor = 'red';
    }
}
