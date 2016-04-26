//scripts con funciones para validar formulario antes de enviar

function validateEmail(sEmail) {
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (filter.test(sEmail))
		return true;
	else
		return false;
};

$('form').submit(function(ev){
	ev.preventDefault();
	var nombre=$('input[name="name"]').val();
    if (nombre.length <3 || nombre.length >20){ //incorrecto
    	$('input[name="name"]').next().show();
    }
    else{
    	$('input[name="name"]').next().hide();
    }
});

$('form').submit(function(ev){
	ev.preventDefault();
	var correo=$('input[name="email"]').val();
    if (!validateEmail(correo)){ //is false
    	$('input[name="email"]').next().show();
    }
    else{
    	$('input[name="email"]').next().hide();
    }
});

$('form').submit(function(ev){
	ev.preventDefault();
	var asunto=$('input[name="subject"]').val();
    if (asunto.length <4 || asunto.length >50){ //incorrecto
    	$('input[name="subject"]').next().show();
    }
    else{
    	$('input[name="subject"]').next().hide();
    }
});

$('form').submit(function(ev){
	ev.preventDefault();
	var msg=$('textarea[name="user_msg"]').val();
    if (msg.length <10 || msg.length >200){ //incorrecto
    	$('textarea[name="user_msg"]').next().show();
    }
    else{
    	$('textarea[name="user_msg"]').next().hide();
    }
});