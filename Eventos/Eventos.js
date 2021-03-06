'use strict'

window.addEventListener('load', () => {
var boton = document.querySelector("#color");

//Evento click
boton.addEventListener('click', () => {
    //This hace referencia al objeto en este caso boton.
    //es lo mismo a boton.style.background
    this.style.background = 'blue';
});

//Evento mouse over
boton.addEventListener('mouseover', () => {
    boton.style.background = '#ccc';
});

//Eveto mouse out
boton.addEventListener('mouseout', () => {
    boton.style.background = 'gray';
});

var caja = document.querySelector("#texto");

//Focus
caja.addEventListener('focus', () =>{
    console.log("Escribe algo!!!");
});

//Blur
caja.addEventListener('blur', () => {
    console.log("fuera de la caja!!");
});

//Keydown
caja.addEventListener('keydown', (event) => {
    console.log("-> " + String.fromCharCode(event.keyCode));
});

//Keypress
caja.addEventListener('keypress', (event) => {
    console.log("Presiona : " + String.fromCharCode(event.keyCode));
});

function Animacion (){

    var intervalo = setInterval(function() {
        console.log("Intervalo ON")
        var letras = document.querySelector("#main");
       
        if(letras.style.fontSize == "50px" ){
            letras.style.color = "blue"
            letras.style.fontSize = "30px";
        }
        else{
            letras.style.color = "red";
            letras.style.fontSize = "50px";
        }
    }, 1000);

    return intervalo;
}

    //Sirve igual que document.ready de Jquery

    var animacion = Animacion();

    var stop = document.querySelector("#para");

    //Detiene la animación de las letras
    stop.addEventListener('click', () => {
        clearInterval(animacion);
    });

    var start = document.querySelector("#inicia");

    //Inicia animación
    start.addEventListener('click', () => {
        Animacion();
    });

});






