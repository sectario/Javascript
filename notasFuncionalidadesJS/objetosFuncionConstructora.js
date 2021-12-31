class objeto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

var autoNuevo = new objeto("tesla", "Model 3", 2020);
//new es crear un objeto de otro objeto

autoNuevo //nos trae los valores de la variable que deriban del objeto principal
