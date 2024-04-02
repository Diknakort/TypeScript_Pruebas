
function tomaVal1(nombreOperando: string) {
    return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
}
function ponEvento0(nombreBoton: string, nombreEvento: string, funcion) {
    let botonSumar = document.getElementById(nombreBoton);
    botonSumar.addEventListener(nombreEvento, funcion);
}
function creaLi(contenido: string) {
    let elementoLi = document.createElement("li");
    elementoLi.textContent = contenido;
    return elementoLi;
}

function mostrarLista() {
    let numeroX = tomaVal1("numero");
    let lista = document.getElementById("lista");
    for (let contador = 1; contador < numeroX; contador++) {
        lista.appendChild(creaLi(contador.toString()));
        alert("hola");

    }
}
ponEvento0("calcular", "click", mostrarLista);

