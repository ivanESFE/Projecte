document.getElementById('btnregister').addEventListener('click', registrar)

function registrar() {

    let nCompleto = document.getElementById('nombre').value
    let correo = document.getElementById('correo').value
    let usuario = document.getElementById('nusuario').value
    let password = document.getElementById('passwd').value
    let datos = { nCompleto, correo, usuario, password }

    var json = JSON.stringify(datos);

    if (localStorage.getItem((correo)) === null) {
        console.log('guardat')
        localStorage.setItem((correo), (json))
        
    }

    
    

}





document.getElementById('iniciarSession').addEventListener('click', loguear)

function loguear(){
    
    let correo = document.getElementById('email').value
    let passwd = document.getElementById('contra').value
    
    let datos = JSON.parse(localStorage.getItem(correo))
    let contra = (datos.password)

    if (contra ==passwd && correo == datos.correo) {
        
        sessionStorage.setItem('usuario' ,(datos.usuario))
        
        let sesion = sessionStorage.getItem('usuario')
        
        alert("L'usuari " + sesion + " ha iniciat sessió")
        console.log("L'usuari " + sesion + " ha iniciat sessió")
        
        
    }

    else{
        alert('dades incorrectes')
    }
    
    
}

