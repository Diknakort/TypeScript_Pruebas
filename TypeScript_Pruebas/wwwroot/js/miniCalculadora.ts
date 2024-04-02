//let numeroX = document.getElementById("numeroA");
//let numeroY = document.getElementById("numeroB");
//let numeroX = Number((<HTMLInputElement>document.getElementById("numeroA")).value);
//let numeroY = Number((<HTMLInputElement>document.getElementById("numeroB")).value);

function sumar(operando1: number, operando2: number) {
    return operando1 + operando2;
}
function restar(operando1: number, operando2: number) {
    return operando1 - operando2;
}
function multiplicar(operando1: number, operando2: number) {
    return operando1 * operando2;
}
//function pulseSumar() {
//    let operando1 = Number((<HTMLInputElement>document.getElementById("operando1")).value);
//    let operando2 = Number((<HTMLInputElement>document.getElementById("operando2")).value);
//    (<HTMLInputElement>document.getElementById("resultado")).value = (sumar(operando1,operando2)).toString();
//}
//function pulseRestar() {
//    let operando1 = Number((<HTMLInputElement>document.getElementById("operando1")).value);
//    let operando2 = Number((<HTMLInputElement>document.getElementById("operando2")).value);
//    (<HTMLInputElement>document.getElementById("resultado")).value = (restar(operando1, operando2)).toString();
//} function pulseMultiplicar() {
//    let operando1 = Number((<HTMLInputElement>document.getElementById("operando1")).value);
//    let operando2 = Number((<HTMLInputElement>document.getElementById("operando2")).value);
//    (<HTMLInputElement>document.getElementById("resultado")).value = (multiplicar(operando1, operando2)).toString();
//}

let botonSuma = document.getElementById("sumar");
botonSuma.addEventListener("click", pulseSumar);
let botonResta = document.getElementById("restar");
botonResta.addEventListener("click", pulseRestar);
let botonMultiplica = document.getElementById("multiplicar");
botonMultiplica.addEventListener("click", pulseMultiplicar);

/////// opcion coger y dejar valores
function tomaVal(nombreOperando: string) {
    return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
}
function ponVal(elemento: string, valor: number) {
    (<HTMLInputElement>document.getElementById(elemento)).value = valor.toString();
}
function pulseSumar() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    ponVal("resultado", sumar(operando1, operando2));
}

function pulseRestar() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    ponVal("resultado", restar(operando1, operando2));
}
function pulseMultiplicar() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    ponVal("resultado", multiplicar(operando1, operando2));
}

//let boton = document.getElementById("sumar");
//boton.addEventListener("click", pulseSumar);