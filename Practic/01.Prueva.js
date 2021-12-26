
let activosClientes = [
    {nombre: 'Cesar', apellido: 'Paez', dineroAhorrado: 200, deudas: 1000},
];

function usuarioYSaldoCuenta(_nombre, _apellido, _dineroAhorrado, _deudas){
    _nombre = String(prompt("Nombre"));
    _apellido = String(prompt("Apellido"))
    _dineroAhorrado = Number(prompt("valor ahorros"));
    _deudas = Number(prompt("Monto deudas"));

    const _nombreCompleto = _nombre + " " + _apellido;    
    
    console.log(_nombreCompleto);

    const _dineroReal = _dineroAhorrado - _deudas;
    console.log("Total patrimonio liquido " + _dineroReal);

    activosClientes.push({nombre: _nombre, apellido: _apellido, dineroAhorrado: _dineroAhorrado, deudas: _deudas});
};


//

var usuario = [
    { name: 'Juan David', lastname: 'Castri Gallego', nickname: 'Juandc' },
];

function userData(_name, _lastName, _nickname) {
    
    _name = prompt ('Nombre');
    _lastName = prompt ('Apellido');
    _nickname = prompt ('Apodo');

    usuario.push({name: _name, lastname: _lastName, nickname:_nickname});

    const completeName = _name + " " + _lastName;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + _nickname + ".");   
}

//
const suscripcionesPlatzi = [
    {suscripcion: "Free", respuesta: "Solo puedes tomar los cursos gratis"},
    {suscripcion: "Basic", respuesta: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {suscripcion: "Expert", respuesta: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {suscripcion: "ExpertPlus", respuesta: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
];

function tipoSuscripcion(_suscripcion) {

    const encontrarSuscripcion = suscripcionesPlatzi.find(({suscripcion}) => suscripcion === _suscripcion);
    if (encontrarSuscripcion != undefined) {
        console.log(encontrarSuscripcion.respuesta);    
    } else {
        console.log("Lo timaron con esa suscripción que NO existe");
    }   
}

function vadidarSuscripcion(_suscripcion) {
    
}
