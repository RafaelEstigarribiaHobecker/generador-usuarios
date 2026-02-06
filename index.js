// Simulamos una base de datos de la Facultad

const alumnos=[
    {id:1,nombre:"Rafael",carrera:"Informática",semestre:5},
    {id:2,nombre:"Ana",carrera:"Electrónica",semestre:3},
    {id:3,nombre:"Marcos",carrera:"Informática",semestre:8}

];



const filtrarPorCarrera = (lista,carrera) =>{
    return lista.filter(alumno=>alumno.carrera===carrera);
};

console.log("--Alumnos de Informática ---");
console.table(filtrarPorCarrera(alumnos,"Informática"));
