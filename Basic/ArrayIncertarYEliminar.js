var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 },
];

var newLocal = articulos.indexOf({ nombre: 'teclado' , costo: 500});

function addArticulo(){
    articulos.push({nombre: prompt("nombre del articulo"), costo: prompt("costo del articulo")}); 
   }
//agregar elementos al final del array y en este caso le pregunta al usuario los datos

articulos.shift()
//elimina el primar elemento del arry

articulos.pop()
//elimina el último elemento del array

articulos.splice(2, 2)

//elimnia el indicie y los elementos siguientes deacuerdo a la cantidad que se le indique
// articulos (2) { nombre: 'TV', costo: 2500 },
// articulos (3) { nombre: 'Libro', costo: 320 },