// actual div
var actual = document.getElementById('actual');

// Botones
var boton_uno = document.getElementById('boton-uno');
var boton_dos = document.getElementById('boton-dos');
var boton_tres = document.getElementById('boton-tres');
var boton_cuatro = document.getElementById('boton-cuatro');
var boton_cinco = document.getElementById('boton-cinco');
var boton_seis = document.getElementById('boton-seis');
var boton_siete = document.getElementById('boton-siete');
var boton_ocho = document.getElementById('boton-ocho');
var boton_nueve = document.getElementById('boton-nueve');
var boton_cero = document.getElementById('boton-cero');

// Add listener botones
boton_uno.addEventListener('click', click_uno);
boton_dos.addEventListener('click', click_dos);
boton_tres.addEventListener('click', click_tres);
boton_cuatro.addEventListener('click', click_cuatro);
boton_cinco.addEventListener('click', click_cinco);
boton_seis.addEventListener('click', click_seis);
boton_siete.addEventListener('click', click_siete);
boton_ocho.addEventListener('click', click_ocho);
boton_nueve.addEventListener('click', click_nueve);
boton_cero.addEventListener('click', click_cero);

// button functions
function click_uno() {
    actual.innerHTML += '1';
}
function click_dos() {
    actual.innerHTML += '2';
}
function click_tres() {
    actual.innerHTML += '3';
}
function click_cuatro() {
    actual.innerHTML += '4';
}
function click_cinco() {
    actual.innerHTML += '5';
}
function click_seis() {
    actual.innerHTML += '6';
}
function click_siete() {
    actual.innerHTML += '7';
}
function click_ocho() {
    actual.innerHTML += '8';
}
function click_nueve() {
    actual.innerHTML += '9';
}
function click_cero() {
    actual.innerHTML += '0';
}