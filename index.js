// Simulamos una base de datos de la Facultad

const alumnos = [{id: 1, nombre: "Rafael", carrera: "Informática", semestre: 3, promedio: 4.5},
    {id: 2, nombre: "Ana", carrera: "Electrónica", semestre: 3, promedio: 3.8},
    {id: 3, nombre: "Marcos", carrera: "Informática", semestre: 8, promedio: 4.2},
    {id: 4, nombre: "Luz", carrera: "Civil", semestre: 3, promedio: 4.9}
];


const buscarAlumnos = (lista, propiedad, valor) => {
    return lista.filter(alumno => alumno[propiedad] === valor);
    //Javascript permite usar cualquier nombre ahí, por ello , usamos 'alumno'.

}

const filtrarAvanzado = (lista, propiedad, operador, valor) => {
    return lista.filter(alumno => {
        if (operador === ">") return alumno[propiedad] > valor;
        if (operador === "<") return alumno[propiedad] < valor;
        if (operador === "===") return alumno[propiedad] === valor;
        return false;
    });
};


/**
 * Calcular el promedio de una lista de alumnos.
 */
const calcularPromedioGeneral = (lista) => {
    // Usamos 'map' para quedarnos solo con los números de los promedios
    const promedios = lista.map(alumno => alumno.promedio);

    //Usamos 'reduce' para sumarlos todos y dividir por la cantidad
    const sumaTotal = promedios.reduce((acumulado, actual) => acumulado + actual, 0);

    return (sumaTotal / lista.length).toFixed(2);
};

console.log(`--- Promedio General de la Facultad: ${calcularPromedioGeneral(alumnos)} ---`);

const inscribirAlumno = (lista, nombre, carrera, semestre, promedio) => {
    const nuevoAlumno = {
        id: lista.length + 1, //Generamos el ID automáticamente
        nombre,
        carrera,
        semestre,
        promedio
    };
    lista.push(nuevoAlumno);
    console.log(`✅  ${nombre} ha sido inscripto/a exitosamente.`);

};

inscribirAlumno(alumnos, "Sofia", "Informatica", 1, 4.8);

console.log(`--- Promedio General de la Facultad: ${calcularPromedioGeneral(alumnos)} ---`);


console.table(alumnos);

// Eliminar por ID usando splice

const darDeBaja = (lista, id) => {
    const indice = lista.findIndex(alumno => alumno.id === id);

    if (indice !== -1) {
        lista.splice(indice, 1);
        console.log(`❌ Alumno/a con ID ${id} eliminado del sistema.`);
    } else {
        console.log("⚠️ No se encontró al alumno/a.")
    }
};

darDeBaja(alumnos, 2); //Chau Ana (ID 2)

console.table(alumnos);

console.log(`--- Promedio General de la Facultad: ${calcularPromedioGeneral(alumnos)} ---`);