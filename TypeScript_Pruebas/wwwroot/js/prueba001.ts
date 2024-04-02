//function addNumbers(x: number, y: number) {
//    return x + y;
//}

//console.log(addNumbers(3, 6));

function concatenar(nombre: string, apellido: string) {
    return nombre + apellido;
}
let nombreEjemplo = "Diego";
let apellidoEjemplo = "Alvira";
let nombreCompleto = `Nombre: ${nombreEjemplo}, Apellido: ${apellidoEjemplo}`;

console.log(concatenar(nombreEjemplo, apellidoEjemplo));
document.writeln(nombreCompleto);


let numero = 18;
function par(valor: number) {

    return (valor % 2 == 0);

}
if (par(numero)) {
    document.writeln(numero + ` es par`);
}
else document.writeln(numero + ` es impar`);


let p = document.createElement("p");
p.textContent = "Hola Mundo Cruel";

let divSalida = document.getElementById("salida");
divSalida.appendChild(p);

let listItem = document.createElement("li");
let listaSalida = document.getElementById("lista");
listaSalida.textContent = "hola que tal";


