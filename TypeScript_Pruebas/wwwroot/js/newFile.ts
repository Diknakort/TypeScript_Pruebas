let lista = document.getElementById("listado");
function mostrarLista2() {
    let numeroX = Number((<HTMLInputElement>document.getElementById("numero")).value);
    for (let contador = 1; contador < numeroX; contador++) {
        let listItem = document.createElement("li");
        listItem.textContent = contador.toString();
        lista.appendChild(listItem);
    //    listaSalida.appendChild(resultado);
    }
}
function ponEvento2(nombreBoton: string, nombreEvento: string, funcion) {
    let botonSumar = document.getElementById(nombreBoton);
    botonSumar.addEventListener(nombreEvento, funcion);
}
ponEvento2("calcular", "click", mostrarLista2);
