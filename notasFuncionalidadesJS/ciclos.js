var estudiantes = ["Maria", "Juan", "Rosa", "Cesar"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
for(var estudiante of estudintes){
    saludarEstudiantes(estudiante);
}

while(estudiantes.length >0){
    var estudiante = estudiantes.shift();
    //va saca elementos del array desde el inicio al final
    saludarEstudiantes(estudiante);
}