//promedio

const numeros = [200, 30, 500,400, 600, 700, 800, 900];

const notas = [
    {nota: 3, creditos:2},
    {nota: 4, creditos:3},
    {nota: 3, creditos:4},
    {nota: 5, creditos:5},
    {nota: 3, creditos:6},
    {nota: 2, creditos:7},
    {nota: 5, creditos:8},
]


function mediaAritmetica(){
    // let _media = 0;

    // for (let i = 0; i < numeros.length; i++) {
    //     _media = _media + numeros[i];
        
    // }

    let _media = numeros.reduce(
        //este metodo nos permite iterar en el array ùtil para sumar los elementos entre sì.
        function (_valorAcumulado = 0, _nuevoElemento) {
            return _valorAcumulado + _nuevoElemento;
          }
    );

    _media = _media / numeros.length;

    return _media.toFixed(2);
}

//promedio ponderado compuesto

function creditosArray(_array){
    _array = _array.map(function(__aray){
        return __aray.creditos;
    });
    return _array;
    }


function notasArray(_array){
    _array = _array.map(function(__aray){
        return __aray.nota;
    });
    return _array;
    }

function promedioCompuesto(_array){

    let _promedioCompuesto = 0;

    let _sumaArray = creditosArray(_array).reduce(
        function (_valorAcumulado = 0, _nuevoElemento) {
            return _valorAcumulado + _nuevoElemento;
          }
    );//35

    for (let i = 0; i < _array.length; i++) {
        _promedioCompuesto = _promedioCompuesto +
            (notasArray(_array)[i] * (creditosArray(_array)[i] / _sumaArray ));
        
    }
    return Number(_promedioCompuesto.toFixed(2));
}

//Mediana

function medianaNUmeros() {
    const _indexMediana = numeros.length / 2;

    if (numeros[_indexMediana] === undefined) {
        const _mediana = numeros[parseInt(_indexMediana)];

        return _mediana;

    } else {
        const _indexinf = parseInt(_indexMediana) - 1;
        const _indexSup = _indexinf + 1;
        const _mediana = (numeros[_indexSup ] + numeros[_indexinf]) / 2;

        return _mediana;
    }
}

//ordenar array

function ordenarNumeros(_array) {
   
        
    const _numeros = _array.sort(function(_a, _b) {
    return _a - _b
    });
    return _numeros;
}


//moda

const numeros1 = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const listaModa = {};

numeros1.map(function(elemento) {
    if(listaModa[elemento]){
        listaModa[elemento] += 1;

    }else{
    listaModa[elemento] = 1;
    }
});

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); 