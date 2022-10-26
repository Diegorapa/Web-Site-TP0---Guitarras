const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarFormulario = (e) => {
	switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test (e.target.value))  {

                document.getElementById ('grupo__nombre') .classList.remove ('formulario__grupo-incorrecto');
                document.getElementById ('grupo__nombre') .classList.add ('formulario__grupo-correcto');
                 
            }
            else { document.getElementById ('grupo__nombre') .classList.add ('formulario__grupo-incorrecto');

            }
	break;

    case "email":
        if (expresiones.email.test (e.target.value))  {

            document.getElementById ('grupo__email') .classList.remove ('formulario__grupo-incorrecto');
            document.getElementById ('grupo__email') .classList.add ('formulario__grupo-correcto');
             
        }
        else { document.getElementById ('grupo__email') .classList.add ('formulario__grupo-incorrecto');

        }
break;

case "telefono":
    if (expresiones.telefono.test (e.target.value))  {

        document.getElementById ('grupo__telefono') .classList.remove ('formulario__grupo-incorrecto');
        document.getElementById ('grupo__telefono') .classList.add ('formulario__grupo-correcto');
         
    }
    else { document.getElementById ('grupo__telefono') .classList.add ('formulario__grupo-incorrecto');

    }
break;

}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario)  ;
    input.addEventListener('blur', validarFormulario)  ;
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});
