//codigo del cuadrado


function perimetroCuadrado(_lado){


    const _perimetro = _lado * 4;
    return _perimetro;
}

function areaCuadrado(_lado) {
    const _area = _lado * _lado;
    return _area;
}

function medidasCuadrado(){
    const _lado = Number(document.getElementById("imputCuadrado").value);

    const _perimetro = perimetroCuadrado(_lado);
    const _area = areaCuadrado(_lado);
    alert(`El perimetro es ${_perimetro} el área es ${_area}`);
}

//document.getElementById("cuadrado") obtener información de los imputs


function perimetroTriangulo(_A, _B,_C){


    const _perimetro = _A + _B + _C;
    return _perimetro;
}

function areaTriangulo(_A, _B, _C) {
    
    let _area;

    if (_B === _C) {
        _area = (Math.sqrt(((_C * _C)-((_A / 2) * (_A / 2)))) * _A) / 2;
        return _area;
    }else{
        _area = "Error: Verifique los valores ingresados";
        return _area;
    }
}

function medidasTriangulo() {
    const _A = Number(document.getElementById("imputTrianguloA").value);
    const _B = Number(document.getElementById("imputTrianguloB").value);
    const _C = Number(document.getElementById("imputTrianguloC").value); 

    const _perimetro = perimetroTriangulo(_A, _B, _C);
    const _area = areaTriangulo(_A, _B, _C);
    alert(`El perimetro es ${_perimetro} el área es ${_area}`);


}



//codigo triangulos
console.group("triangulos");
console.log("Los trianguloos");
console.groupEnd();

// let _area

// let Resultado = _B === _C ? _area = Math.sqrt((_C * _C)-((_A / 2) * (_A / 2))) 
//     : _area = "Error: Verifique los valores ingresados";

// return _area
// }