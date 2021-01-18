(function(){//SCOPE

    let mensaje ='Hola'
    if (true){
        let mensaje='Mundo';//con let apunta a otro espacio en memoria
        //el primer let mensaje no es el mismo que el segundo
    }

   console.log(mensaje);
   const MENSSAJE2='Hola2';/// es una convencion usar las constantes con MAYUSCULAS
   console.log(MENSSAJE2);

})();//SCOPE //funcion auto invocado  ///PATRON MODULO
//CUANDO UTILIZAMOS LET LAS VARIABLES SOLO EXISTEN EN EL SCOPE...despues ya no exiisten
