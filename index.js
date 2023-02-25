var Mousetrap = require("mousetrap");

const actual = document.getElementById('actual');
const buttons = document.querySelectorAll('.button-calc');
const resultado = document.getElementById('resultado');

function sumar() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorActual + valorResultado;
    actual.innerHTML = '0';
}

function restar() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorResultado - valorActual;
    actual.innerHTML = '0';
}

function multiplicar() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorResultado * valorActual;
    actual.innerHTML = '0';
}

function dividir() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorResultado / valorActual;
    actual.innerHTML = '0';
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

function handleClick(event) {
    // sumar
    if (event.target.textContent == "+") {
        sumar();
    }
    // resta
    else if (event.target.textContent == '-') {
        restar();
    }
    else if (event.target.textContent == "*") {
        multiplicar();
    }
    else if (event.target.textContent == "/") {
        dividir();
    }
    else if (event.target.textContent == "DEL") {
        delOne();
    }
    else if (event.target.textContent == "AC") { 
        clearAll();
    }
    else {
        actual.innerHTML += event.target.textContent;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Mousetrap bind to numbers 0 to 9.
for (let i = 0; i <= 9; i++) {
    Mousetrap.bind(`${i}`, function() {
        actual.innerHTML += i;
    });
}

// Operator buttons mousetrap
Mousetrap.bind("+", function() {
    sumar();
});
Mousetrap.bind("-", function() {
    restar();
});
Mousetrap.bind("*", function() {
    multiplicar();
});
Mousetrap.bind("/", function() {
    dividir();
});