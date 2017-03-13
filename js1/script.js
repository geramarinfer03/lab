function f1() {
    alert("boton 1 presionado");
}

/* Anonima*/
/*
    var boton1 = function(){
     alert("boton 1 presionado");
    }
*/

var boton = document.getElementById('boton2');
boton2.addEventListener("click", function (){
    boton.style.background = '#242562';
    boton.style.color = 'white';
});