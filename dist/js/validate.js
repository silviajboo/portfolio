//scripts con funciones para validar formulario antes de enviar

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail))
        return true;
    else
        return false;
}

$('form').submit(function(ev){
    ev.preventDefault();

    var error = false;
    
    var nombre=$('input[name="name"]').val();
    if (nombre.length <3 || nombre.length >20){ //incorrecto
        error = true;
        $('input[name="name"]').next().show();
    }
    else{
        $('input[name="name"]').next().hide();
    }

    var correo=$('input[name="email"]').val();
    if (!validateEmail(correo)){ //is false
        error = true;
        $('input[name="email"]').next().show();
    }
    else{
        $('input[name="email"]').next().hide();
    }

    
    var asunto=$('input[name="subject"]').val();
    if (asunto.length <4 || asunto.length >50){ //incorrecto
        error = true;
        $('input[name="subject"]').next().show();
    }
    else{
        $('input[name="subject"]').next().hide();
    }

    
    var msg=$('textarea[name="user_msg"]').val();
    if (msg.length <10 || msg.length >200){ //incorrecto
        error = true;
        $('textarea[name="user_msg"]').next().show();
    }
    else{
        $('textarea[name="user_msg"]').next().hide();
    }

    if (error==false)
    {
        $(this).submit();
    }
});