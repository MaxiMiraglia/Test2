function formValidacion(){   
    //declaracion de variables
    var nombre = document.getElementById("nombre").value;    
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var msj = document.getElementById("msj").value;
    var validarNomyAp = /^[a-z ,.'-]+$/i;
    var validarEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //validación del nombre y apellido
    if((nombre.trim()==="") || (apellido.trim()==="") || (email==="") || (msj.trim()===""))
    {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(!validarNomyAp.test(nombre) || !validarNomyAp.test(apellido))
    {
        alert("Los campos nombre y apellido no pueden llevar caracteres especiales o números, solo letras.");
        return false;
    }
    else if((nombre.length<3) || (nombre.length>20))
    {
         alert("El nombre debe tener entre 3 a 20 caracteres.");
         return false;
    }
    else if((apellido.length<3) || (apellido.length>20))
    {
         alert("El apellido debe tener entre 3 a 20 caracteres.");
         return false;
    }
    //validar email
    else if(!validarEmail.test(email))
    {
        alert("Formato incorrecto para el email.")
        return false;
    }
    else
    {
        alert("Envío realizado con éxito. ¡Gracias por contactarse con nosotros!");
        return true;
    }
}