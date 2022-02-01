var Capturar = function(){
    let lstNumero = document.getElementsByClassName("hola"),
        arrayGuardar = [];         
    for (var i = 0; i < lstNumero.length; i++) {    
        arrayGuardar[i] = lstNumero[i].value;
        console.log (lstNumero[i].value);     
        }       
    }

    var boton = document.getElementById('boton')

    boton.onclick=Capturar