let saludo = "Hola Facu, ";
let pregunta = "como estas?"

resultado01 = saludo + pregunta;

document.writeln(resultado01 + "<br>");


/* Podemos concatenar numeros forzandolo a texto TIPADO DINAMICO*/ 

let numero1 = 1;
let numero2 = 2;

resultado02 = "" + numero1 + numero2;

document.writeln(resultado02 + "<br>");


/**Funcion Concat():  Si o Si necesitamos un String en alguna variable*/


let numero3 = "3"; //Si o si poner un String
let numero4 = 4;

frase = numero3.concat(numero4);
document.writeln(frase  + "<br>");


/*Backtics y ${}:  Con los backticks ( ` )  y la variable encerrada en ${}*/

let nombre = "Facundo"
let accion = `soy ${nombre} y estoy codeando `;

document.writeln(accion + "<br>");



