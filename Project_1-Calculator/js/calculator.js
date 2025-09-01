console.log('Calculator');

let currentDisplay = " ";
document.querySelector('#display').value = currentDisplay;

function addOpenParenthesis() {
    currentDisplay += "(";
    document.querySelector("#display").value = currentDisplay;
}

function addCloseParenthesis() {
    currentDisplay += ")";
    document.querySelector("#display").value = currentDisplay;
}

function addSymbol(symbol) {
    currentDisplay += symbol;
    document.querySelector("#display").value = currentDisplay;
}


