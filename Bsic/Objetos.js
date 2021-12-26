var objeto = {
    marca: "Toyora",
    modelo: "carolla",
    //propiedade;s palabras clave y valores
    annio: "2020",
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
    //metodos de objetos son funciones del objeto
    //this hace referencia al objeto (padre para este caso)
};

//llamar un valor especifico de un objeto

objeto.marca;
//nombre del objeto segido del valor
