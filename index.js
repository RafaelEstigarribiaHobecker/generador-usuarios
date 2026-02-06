// Simulamos una base de datos de la Facultad

const alumnos = [
    {id: 1, nombre: "Rafael", carrera: "Informática", semestre: 3, promedio: 4.5},
    {id: 2, nombre: "Ana", carrera: "Electrónica", semestre: 3, promedio: 3.8},
    {id: 3, nombre: "Marcos", carrera: "Informática", semestre: 8, promedio: 4.2},
    {id: 4, nombre: "Luz", carrera: "Civil", semestre: 3, promedio: 4.9}

];


const buscarAlumnos = (lista, propiedad, valor) => {
    return lista.filter(alumno => alumno[propiedad] === valor);
    //Javascript permite usar cualquier nombre ahí, por ello , usamos 'alumno'.

}


// Buscar por carrera

console.log("--Alumnos de Informática ---");
console.table(buscarAlumnos(alumnos, "carrera", "Informática"));

//Buscar por semestre

console.log("---Alumnos del 3er Semestre ---");
console.table(buscarAlumnos(alumnos, "semestre", 3));
