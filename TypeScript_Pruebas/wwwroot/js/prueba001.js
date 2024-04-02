//function addNumbers(x: number, y: number) {
//    return x + y;
//}
//console.log(addNumbers(3, 6));
function concatenar(nombre, apellido) {
    return nombre + apellido;
}
var nombreEjemplo = "Diego";
var apellidoEjemplo = "Alvira";
var nombreCompleto = "Nombre: ".concat(nombreEjemplo, ", Apellido: ").concat(apellidoEjemplo);
console.log(concatenar(nombreEjemplo, apellidoEjemplo));
document.writeln(nombreCompleto);
var numero = 18;
function par(valor) {
    return (valor % 2 == 0);
}
if (par(numero)) {
    document.writeln(numero + " es par");
}
else
    document.writeln(numero + " es impar");
var p = document.createElement("p");
p.textContent = "Hola Mundo Cruel";
var divSalida = document.getElementById("salida");
divSalida.appendChild(p);
var listItem = document.createElement("li");
var listaSalida = document.getElementById("lista");
listaSalida.textContent = "hola que tal";
//# sourceMappingURL=prueba001.js.map