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

function handleClick(event) {
    // sumar
    if (event.target.textContent == "+") {
        sumar();
    }
    if (event.target.textContent == '-') {
        restar();
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
    
});
Mousetrap.bind("/", function() {
    
});