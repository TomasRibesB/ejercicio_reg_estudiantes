const readline = require('readline-sync');
const { mostrarEstudiantes } = require('./lista_estudiantes');

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readline.questionInt('Cuantos estudiantes desea registrar? ');
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readline.question(`Ingrese el nombre del estudiante ${i + 1}: `);
    const edad = readline.questionInt(`Ingrese la edad del estudiante ${nombre}: `);
    const estudiante = {
      nombre,
      edad
    };
    estudiantes.push(estudiante);
  }
  mostrarEstudiantes(estudiantes);
}

registrarEstudiantes();