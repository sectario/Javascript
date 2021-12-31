var numero = 1;

switch(numero){
    case 1:console.log("Soy uno!");
        break;
    case 10:console.log("Soy un diez!");
        break;
    //Breack hace que no siga validando en caso de validarse ese caso
    case 10:console.log("Soy un diez!");
        break;
    default:console.log("No valido");
    //ya no valida mas alla de ese punto
}