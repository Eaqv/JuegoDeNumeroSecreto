//Funcion que permite asignar el texto 
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Funcion para generar aleatorio
function generarUnNumeroAleatorio(maximo){
    let valor = Math.floor(Math.random()*maximo)+1;
    return valor;
}
//Funcion para limpiar donde se ponen los numeros una vez usado
function limpiarCajita(){
    document.querySelector('#valorUsuario').value = '';
}
//Funcion Juego
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);    
    console.log('Usuario ' + numeroDeUsuario);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }    
        intentos++;
        limpiarCajita();
    }
    return;
}
//Funcion Mensajes Iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarUnNumeroAleatorio(10);
    intentos = 1;    
    console.log('Numero Secreto ' + numeroSecreto);
}
//Funcion Reinicio de juego
function reiniciarJuego(){
    condicionesIniciales();    
    console.log('Numero Secreto ' + numeroSecreto);
    limpiarCajita();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
//Declaracion de variables
let intentos;
let numeroSecreto;
//Uso de funciones 
condicionesIniciales();

/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function indiceMasaCorporal(altura,peso){

}
function calculoVectorial(numero){


}
function cambioDolar(reales) {
    

}
function areaRectangulo(area,perimetro) {
    
}
function areaPerimetro(radio) {
    
}
function tablaDeMultiplicar(numero) {
    
}
*/
/*
Desafio
function showHolaMundo(){
    console.log("Hola Mundo");
}
function holaNombre(nombre){
    console.log('!Hola '+nombre+'!');
}
function doble(a){
    console.log(+a * 2);
    return +a * 2;
}
function promedio(b,c,d){
    let prom=(+b + +c + +d)/3;
    console.log('Promedio: ' + prom);
    return prom;
}
function mayorQue(e,f){
    if(+e > +f){
        console.log('Mayor: ' + e);
        return e;
    }else{
        console.log('Mayor: ' + f);
        return f;
    }
}
function alCuadrado(g){
    console.log('Multiplicado por si mismo: ' + (+g * +g));
    return +g * +g;
}
showHolaMundo();
let nomb = prompt('Ingresa un nombre:');
holaNombre(nomb);
let dob = prompt('Ingresa un numero para enviarte el doble:');
doble(dob);
let numA = prompt('Ingresa el primer numero para el promedio:');
let numB = prompt('Ingresa el segundo numero para el promedio:');
let numC = prompt('Ingresa el tercer numero para el promedio:');
promedio(numA,numB,numC);
let numD = prompt('Ingresa el primer numero para ver el mayor:');
let numF = prompt('Ingresa el segundo numero para ver el mayor:');
mayorQue(numD,numF);
let numG = prompt('Ingresa numero para multiplicarlo por el mismo:');
alCuadrado(numG);
*/
/*
Desafíos
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */