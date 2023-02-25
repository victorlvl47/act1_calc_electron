var Mousetrap = require("mousetrap");

const actual = document.getElementById('actual');
const buttons = document.querySelectorAll('.button-calc');
const resultado = document.getElementById('resultado');
const historial_operaciones = document.getElementById('historial-operaciones');

function crearOperacionHistorial(operand1, operand2, operator, result) {
    // create a new <p> element
    var operacion = document.createElement("p");

    // create a text node
    var text_operacion = document.createTextNode(`${operand1} ${operator} ${operand2} = ${result}`);

    // append the text node to the <p> element
    operacion.appendChild(text_operacion);

    // add the <p> element to the document
    historial_operaciones.insertBefore(operacion, historial_operaciones.firstChild);
}

function sumar() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    let ans = valorActual + valorResultado;
    resultado.innerHTML = ans;
    actual.innerHTML = '0';

    crearOperacionHistorial(valorResultado, valorActual, "+", ans)
}

function restar() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    let ans = valorResultado - valorActual;
    resultado.innerHTML = ans;
    actual.innerHTML = '0';

    crearOperacionHistorial(valorResultado, valorActual, "-", ans)
}

function multiplicar() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    let ans = valorResultado * valorActual;
    resultado.innerHTML = ans;
    actual.innerHTML = '0';

    crearOperacionHistorial(valorResultado, valorActual, "*", ans)
}

function dividir() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    let ans = valorResultado / valorActual;
    resultado.innerHTML = ans;
    actual.innerHTML = '0';

    crearOperacionHistorial(valorResultado, valorActual, "/", ans)
}

function clearAll() {
    actual.innerHTML = '0';
    resultado.innerHTML = '0';
}

function delOne() {
    if (actual.innerHTML != "0") {
        actual.innerHTML = actual.innerHTML.slice(0, actual.innerHTML.length - 1);
    }
}

function handleNumberKeyPress(number) {
    actual.innerHTML += number;
}

function handleOperatorKeyPress(operator) {
    if (operator == "+") {
        sumar();
    }
    else if (operator == '-') {
        restar();
    }
    else if (operator == "*") {
        multiplicar();
    }
    else if (operator == "/") {
        dividir();
    }
}

function handleClick(event) {
    // sumar
    if (event.target.textContent == "+") {
        handleOperatorKeyPress("+");
    }
    // resta
    else if (event.target.textContent == '-') {
        handleOperatorKeyPress("-");
    }
    else if (event.target.textContent == "*") {
        handleOperatorKeyPress("*");
    }
    else if (event.target.textContent == "/") {
        handleOperatorKeyPress("/");
    }
    else if (event.target.textContent == "DEL") {
        delOne();
    }
    else if (event.target.textContent == "AC") { 
        clearAll();
    }
    else {
        handleNumberKeyPress(event.target.textContent);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Mousetrap bind to numbers 0 to 9.
for (let i = 0; i <= 9; i++) {
    Mousetrap.bind(`${i}`, function() {
        handleNumberKeyPress(i);
    });
}

// Operator buttons mousetrap
Mousetrap.bind("+", function() {
    handleOperatorKeyPress("+");
});
Mousetrap.bind("-", function() {
    handleOperatorKeyPress("-");
});
Mousetrap.bind("*", function() {
    handleOperatorKeyPress("*");
});
Mousetrap.bind("/", function() {
    handleOperatorKeyPress("/");
});
