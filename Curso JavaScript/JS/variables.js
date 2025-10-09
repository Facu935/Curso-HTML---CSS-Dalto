/*  TIPOS DE VARIABLES

string = "Cadena de Texto"
number = 25
booleana = true/false;
*/

var nombre = "Facu";
let numero = 25;
const segundoNumero = 2;

alert(nombre);

//Declaracion de Variables Multiples
let numero1, numero2, numero3;
numero1 = 1;
numero2 = 2;
numero = 3;

/*Hoisting:  Si bien esta presente, el concepto de interpretar por cascada, en JS vas a poder primero llamar a una funcion y despues crearla, se va a ver afectado, asi que puede ser que el codigo cambie de abajo a arriba, pero en ciertos casos */


//Tipos de Datos: Null, NaN , Undefined.
let letra = null; //La inicilaizamos y le decimos que esta vacia

//NaN = "Not a Number", si te salta esto es porque estas haciendo una operacion invalida donde necesitas un numero; ej: multiplicar un numero con un String (ojo que suma funciona porque concatena)

//Operaciones con Prompt: Es un funcion, una manera para que el usuario vaya cargando datos, para que sea de manera dinamica, y lo que este ahi vamos a poder usarlo a lo largo del programa

let miNombre = prompt("Decime tu nombre");
alert("hola " + miNombre); //Aca hay concatenacion


