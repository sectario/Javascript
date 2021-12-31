const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});
colombia.push({
    name: "Bill Gates",
    salary: 100000000,
  });


function arraySalarios(_objeto) {
    const _array = _objeto.map(function(_objeto) {
        return _objeto.salary;
    });
    return _array;
}

function medianaSalarios(_objeto) {

    const _arrayOrdenado = arraySalarios(_objeto).sort(function(_a , _b) {
        return _a - _b;
    });

    const _indexMediana = (_arrayOrdenado.length) / 2 ;

    if (_arrayOrdenado[_indexMediana] === undefined) {
        const _mediana = _arrayOrdenado[parseInt(_indexMediana)];

        return _mediana;

    } else {
        const _indexinf = parseInt(_indexMediana) -1 ;
        const _indexSup = _indexinf + 1 ;
        const _mediana = (_arrayOrdenado[_indexSup] + _arrayOrdenado[_indexinf]) / 2 ;

        return _mediana;
    }
}

function mejoresSalarios(_objeto, _porcentaje) {
    const _arrayOrdenado = arraySalarios(_objeto).sort(function(_a , _b) {
        return _b - _a;
    });

    if (_porcentaje <= 100) {
    const _tamannioArray = _arrayOrdenado.length;
    const _indexPorcentaje = parseInt(_tamannioArray * (_porcentaje / 100));
    let _knifeCount = _indexPorcentaje;
    const _topX = _arrayOrdenado.splice(0, _knifeCount);

    return _topX;
        
    } else {
        return "El porcentaje no puede ser superior al 100%"
        
    }

    


}