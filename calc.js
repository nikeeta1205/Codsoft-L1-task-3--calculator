let display = document.getElementById('display');

function updateDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        let result = Function('"use strict";return (' + display.value + ')')();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
