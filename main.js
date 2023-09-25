let nombreDocente = prompt("Ingrese nombre completo del docente")
    alert("¡Bienvenido " + nombreDocente + '!' + ' A continuacion sacará el promedio final de los 6 alumnos de la comisión');

function solicitarPromedio(){
let nombreAlumno = prompt("Ingrese nombre completo del alumno")
let primerParcial = parseInt(prompt("Ingrese nota del primer parcial (notas del 1 al 10)"))
let segundoParcial = parseInt(prompt("Ingrese nota del segundo parcial (notas del 1 al 10)"))
let resultado = (primerParcial + segundoParcial) / 2; 

while(resultado>11){
    alert("El número ingresado es incorrecto, vuelva a comenzar reiniciando la página");
}

alert("el promedio final es: " + resultado);

if (resultado > 6) {
    alert("El alumno está aprobado")
}  else {
    alert("El alumno está desaprobado")
}
}

solicitarPromedio();
solicitarPromedio();
solicitarPromedio();
solicitarPromedio();
solicitarPromedio();
solicitarPromedio();

