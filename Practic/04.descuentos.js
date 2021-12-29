
function descuento(_precio, _descuento) {
    const _descuentoAplicar = 100 - _descuento;
    const _precioConDescuento = (_precio * _descuentoAplicar) / 100;
    // alert(`El precio original es ${_precio} y el precio con descuento queda en ${_precioConDescuento}`);
    // console.log({_precio, _descuento, _precioConDescuento});
    //de està forma se genera un objeto con las variables como propiedades y los argumentos son los valores
    //Object { _precio: 100, _descuento: 0.85, _precioConDescuento: 85 }
    return _precioConDescuento;
};

function calcularPrecio() {
    const _precio = Number(document.getElementById("inputPrice").value);
    const _descuento = Number(document.getElementById("inputdiscount").value);
    const _precioConDescuento = descuento(_precio, _descuento);
    const _obtenerEtiqueta = document.getElementById(`resultprice`);
    _obtenerEtiqueta.innerText = `El precio con descueento es $${_precioConDescuento}` 
}