"use strict";
(function () {
    //nombre timpo string
    function saludar(nombre) {
        console.table('Hola ' + nombre + ', Como estas?'); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})(); //funcion auto invocado  ///PATRON MODULO
