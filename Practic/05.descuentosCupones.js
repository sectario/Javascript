const cupones = [`jZ8znifH`,
    `dQwM2JTQ`,
    `hsZabhU9`,
    `UaRNpMjL`,
    `vPimkuan`,
    `oFLRjLCd`,
    `NKDsMhKa`,
    `5T4dfxgS`,
    `iYjtAFSX`,]

let compras = [];




function descuento(_precio, _descuento) {
    const _descuentoAplicar = 100 - _descuento;
    const _precioConDescuento = (_precio * _descuentoAplicar) / 100;
    // alert(`El precio original es ${_precio} y el precio con descuento queda en ${_precioConDescuento}`);
    // console.log({_precio, _descuento, _precioConDescuento});
    //de està forma se genera un objeto con las variables como propiedades y los argumentos son los valores
    //Object { _precio: 100, _descuento: 0.85, _precioConDescuento: 85 }
    return _precioConDescuento;
};

function leerCupon(_usuario, _cupon) {
    
    if (cupones.includes(_cupon)) {
        const _indiceCupon = cupones.indexOf(_cupon);
        cupones.splice(_indiceCupon, 1);
        return 10;
        
    } else {
        var _resultado = _cupon === `` ? 0 : false;
        return _resultado;

    };
    
};

function calcularPrecio() {
    const _usuario = String(document.getElementById("inputUser").value);
    const _precio = Number(document.getElementById("inputPrice").value);
    const _descuento = Number(document.getElementById("inputdiscount").value);
    const _cupon = String(document.getElementById("inputCoupon").value)

    const _obtenerEtiqueta = document.getElementById(`resultprice`);

    if (_usuario.length > 4 && _usuario.includes(` `) === false ) {

        if (_precio >= 24) {
            const _precioConDescuento = descuento(_precio, _descuento);
            const _leerCupon = leerCupon(_usuario, _cupon);
    
            var _precioConDescuentoCupon = _leerCupon === false ? true : _precioConDescuento - _leerCupon;
    
    
            _obtenerEtiqueta.innerText = _precioConDescuentoCupon === true ? 
            `El cupon ${_cupon} no es valido, por favor utilice un cupon valido` : 
            `El precio con descuento es $${_precioConDescuentoCupon.toFixed(2)}`;

        } else {
            _obtenerEtiqueta.innerText = `El precio minimo es $24.`;
    
        }
    } else {
        _obtenerEtiqueta.innerText = `El usuario debe ter más de 4 caracteres y sin espacios`;
    }

    

    
    
};


