function tomaVal1(nombreOperando) {
    return Number(document.getElementById(nombreOperando).value);
}
function ponEvento0(nombreBoton, nombreEvento, funcion) {
    var botonSumar = document.getElementById(nombreBoton);
    botonSumar.addEventListener(nombreEvento, funcion);
}
function creaLi(contenido) {
    var elementoLi = document.createElement("li");
    elementoLi.textContent = contenido;
    return elementoLi;
}
function mostrarLista() {
    var numeroX = tomaVal1("numero");
    var lista = document.getElementById("lista");
    for (var contador = 1; contador < numeroX; contador++) {
        lista.appendChild(creaLi(contador.toString()));
        alert("hola");
    }
}
ponEvento0("calcular", "click", mostrarLista);
//# sourceMappingURL=numerosMenores9.js.map