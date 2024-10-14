const display = document.getElementById("display");
const AC = document.getElementById("AC");

function appendToDisplay(input) {
    display.value += input;
    AC.innerHTML = "C";
}

function clearDisplay() {
    display.value = "";
    AC.innerHTML = "AC";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }

}

function negative() {
    try {
        display.value = eval(display.value + "*-1");
    } catch (error) {
        display.value = "Error";
    }
}

function percent() {
    try {
        display.value = eval(display.value + "/100");
    } catch (error) {
        display.value = "Error";
    }
}

