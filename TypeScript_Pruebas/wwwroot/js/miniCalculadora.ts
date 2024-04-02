function sumar(operando1: number, operando2: number) {
    return operando1 + operando2;
}
function restar(operando1: number, operando2: number) {
    return operando1 - operando2;
}
function multiplicar(operando1: number, operando2: number) {
    return operando1 * operando2;
}

//let botonSuma = document.getElementById("sumar");
//botonSuma.addEventListener("click", pulseSumar);
//let botonResta = document.getElementById("restar");
//botonResta.addEventListener("click", pulseRestar);
//let botonMultiplica = document.getElementById("multiplicar");
//botonMultiplica.addEventListener("click", pulseMultiplicar);

/////// opcion coger y dejar valores
function tomaVal(nombreOperando: string) {
    return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
}
function ponVal(elemento: string, valor: number) {
    (<HTMLInputElement>document.getElementById(elemento)).value = valor.toString();
}
// funciones individuales de OPERADORES
//function pulseSumar() {
//    let operando1 = tomaVal("operando1");
//    let operando2 = tomaVal("operando2");
//    ponVal("resultado", sumar(operando1, operando2));
//}

//function pulseRestar() {
//    let operando1 = tomaVal("operando1");
//    let operando2 = tomaVal("operando2");
//    ponVal("resultado", restar(operando1, operando2));
//}
//function pulseMultiplicar() {
//    let operando1 = tomaVal("operando1");
//    let operando2 = tomaVal("operando2");
//    ponVal("resultado", multiplicar(operando1, operando2));
//}

// OPCION SWITCH para distintos botones
function pulsaBoton() {
    let operando1 = tomaVal("operando1");
    let operando2 = tomaVal("operando2");
    switch (this.id) {
        case "sumar": ponVal("resultado", sumar(operando1, operando2)); break;
        case "restar": ponVal("resultado", restar(operando1, operando2)); break;
        case "multiplicar": ponVal("resultado", multiplicar(operando1, operando2)); break;
        
    }
}

function ponEvento1(nombreBoton: string, nombreEvento: string, funcion) {
    let boton = document.getElementById(nombreBoton);
    boton.addEventListener(nombreEvento, funcion);
}
ponEvento1("sumar", "click", pulsaBoton);
ponEvento1("restar", "click", pulsaBoton);
ponEvento1("multiplicar", "click", pulsaBoton);

//function pulsaDos() {
//    alert("hola tú, el resultado es:")
//}


// ////// Cogiendo cada valor y traduciendo cada linea para coger el valor de cada operador
//
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