var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
//filter crea un nuevo array en la nueva variable con los parametros solicitados

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
//map solicita los valores de una propiedad especifica y genera un array de los datos

var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});
//find nos trae los valores que concidan con la busqueda como objeto y genera un nuevo array

var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
//some valida la existencia de los parametros solicitados falso/verdadero.


articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
//forEach ejecuta la funcion indicada analiza cada elemento del array. No genera array

articulos.sort(function(_a , _b) {
    return _a - _b;
});
//ordena los elementos de menor a mayo numeros, tambien se puede usar para latras

let _sumaArray = creditosArray(_array).reduce(
    function (_valorAcumulado = 0, _nuevoElemento) {
        return _valorAcumulado + _nuevoElemento;
      }
);//35

//permite sumar los elementos de un array sin tener que usar un ciclo for

_usuario.includes(` `) === false 

//valida la existencia de algo en tambien aplica para una varaible