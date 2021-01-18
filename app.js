"use strict";
(function () {
    var mensaje = 'Hola';
    if (true) {
        var mensaje_1 = 'Mundo'; //con let apunta a otro espacio en memoria
        //el primer let mensaje no es el mismo que el segundo
    }
    console.log(mensaje);
    var MENSSAJE2 = 'Hola2'; /// es una convencion usar las constantes con MAYUSCULAS
    console.log(MENSSAJE2);
})(); //SCOPE //funcion auto invocado  ///PATRON MODULO
//CUANDO UTILIZAMOS LET LAS VARIABLES SOLO EXISTEN EN EL SCOPE...despues ya no exiisten
