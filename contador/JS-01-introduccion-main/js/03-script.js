console.log('📘 Inicio');

function mensaje(){
    alert('hola');
    /* resultado = confirm('estas seguro de borrar (S/N) ?');
    console.log('resultado: ' + resultado);*/
}

function cambiar(color){
   console.log('color ' + color);
   /* window.document.body.style.backgroundColor = color; */
   document.getElementById('contenedor1').style.backgroundColor = color
}