const marca = ["BMW", "Mercedes-Benz", "Audi", "Lexus", "Renault", "Ford", "Opel", "Seat"];
//8
const modelo = ["DB11", "DB9", "DBS", "DBX", "Rapide", "Vanquish", "Vantage", "12"];
//8

class auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

var nuevosAutos = [];

for(var i = 0; marca.length > i; i++){
 
    let _modelo = marca[i];
    let _marca = modelo[i];

    var _nuevosAutos = new auto(_marca, _modelo);

    nuevosAutos.push(_nuevosAutos);

}
