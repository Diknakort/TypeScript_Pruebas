var lista = document.getElementById("listado");
function mostrarLista2() {
    var numeroX = Number(document.getElementById("numero").value);
    for (var contador = 1; contador < numeroX; contador++) {
        var listItem_1 = document.createElement("li");
        listItem_1.textContent = contador.toString();
        lista.appendChild(listItem_1);
        //    listaSalida.appendChild(resultado);
    }
}
function ponEvento2(nombreBoton, nombreEvento, funcion) {
    var botonSumar = document.getElementById(nombreBoton);
    botonSumar.addEventListener(nombreEvento, funcion);
}
ponEvento2("calcular", "click", mostrarLista2);
//# sourceMappingURL=newFile.js.map