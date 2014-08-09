var peso;
var pesoEnMarte;//CamelCase

alert("¿Cuál es tu peso en marte?");
peso=prompt("¿Cuál es tu peso?", "70");
peso=parseInt(peso);
pesoEnMarte=(peso/9.81)*3.711;
alert("Tu peso en marte es: " + pesoEnMarte + " Kg.");
//alert: Función
//alert("Hola mamá!!");
//var nombre="José";
//var apellido="Díaz";
//var edad=21;

//alert(nombre + " " + apellido + "\n" + edad + " años");
//alert(5 + 8 + "2");