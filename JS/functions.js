// alert("FUNCTION ACTIVO");
alert("FUNCTION ACTIVO");
// ########### TIPO DE VARIABLES
// CONST para valores constantes
const p1= 3.1416;
const pull = 2.54;
// VAR para variables constantes
var days = 10;
var name = "Wilder Duarte";
// LET para variables de bloque o locales
let count = 1;

// ############## FORMAS DE IMPRESION
// ALERT
// alert(name);
// CONSOLE.LOG
console.log(name);
//BODY - PANTALLA
document.write(name + "###Wilder Duarte") 
document.getElementById("box_one").innerHTML = "<h1>Wilder Duarte</h1>";
document.getElementById("box_two").innerText = "<h1>Wilder Duarte</h1>";

// LIBRERIAS
//Swal.fire(
//  'The Internet?',
//    'That thing is still around?',
//    'question'
// )
//  swal.fire(
 //   {
 //      icon: 'error',
 //      showConfirmeButton: false,
 //      title: name,
 //      text: name,
 //      footer: "footer: " + name,
 //      background: 'green',
 //      position: 'center'
 //   }
 // );

// ########### TIPOS DE DATOS
// NUMERICOS
var number_one = 20;
var number_two = 5.5;
// TEXTO
var class_type = "Electiva tecnica";
// BOOLEANOS
var boolean = true; //false
// ARRAYS - VECTORES
var array_num = [1,2,3,4,5,6,7,8,9];
var array_text = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_mix = [1, "a", 2, "c"];
var array_null = [
{name:"Wilder", last_name:"Duarte", age:"34"},
{name:"Anyi", last_name:"Martines", age:"32"},
{name:"Celeste", last_name:"Duarte", age:"9"},
{name:"Antonella", last_name:"Duarte", age:"6"},
];

  // ######### OPERADORES BASICOS
  // SUMA
  var suma = number_one + number_two;
  console.log("suma = " + suma);
  // RESTA
  var resta = number_one - number_two;
  console.log("resta = " + resta);
  // MULTIPLICACION
  var multi = number_one * number_two;
  console.log("multiplicacion = " + multi);
  // DIVISION
  var divi = number_one / number_two;
  console.log("division = " + divi.toFixed);
  // MODULO
  var resta = number_one % number_two;
  console.log("modulo = " + modulo);
  