const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const lista = ["piedra", "papel", "tijera"];

function juegoDeManos(_CPU, _ju){
    //queda pendiente hacer que la computadora escoja.

    if (_CPU === _ju){
        return "Empate";
    }else if (_CPU === piedra && papel === _ju){
        return "Gana el jugador";
    } else {"gana el computador"}
    
}