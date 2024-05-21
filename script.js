function appendValue(value) {
    document.calculator.ans.value += value;
}

function clearValue() {
    document.calculator.ans.value = '';
    document.getElementById('resultado').innerText = '';
}

function calculate() {
    try {
        let expression = document.calculator.ans.value.replace(/X/g, '*'); // Replace X with *
        const result = eval(expression);
        document.calculator.ans.value = result;
        document.getElementById('resultado').innerText = 'Resultado: ' + result;
    } catch (e) {
        document.calculator.ans.value = '';
        document.getElementById('resultado').innerText = 'Error: Entrada inválida';
    }
}
