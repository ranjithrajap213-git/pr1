function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function backspace() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}

function calculate() {
    var p = document.getElementById('result').value;
    try {
        var q = eval(p);
        document.getElementById('result').value = q;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}