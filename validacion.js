//Haz tú validación en javascript acá

var $html = {
    nombre: document.querySelector(".nombre"),
    email: document.querySelector(".email"),
    asunto: document.querySelector(".asunto"),
    mensaje: document.querySelector("mensaje"),

}

function validarDatos(){
    window.event.preventDefault()

    if (document.form.nombre.value =="") {
        alert("campo nombre obligatorio")
        

    }else if(document.form.email.value==""){
        alert("email obligatorio")
        document.form.email.focus()

    }else if (document.form.asunto.value == "") {
        alert("campo asunto es obligatorio")
        document.form.asunto.focus()
        
    }else if (document.form.mensaje.value == ""  || document.form.mensaje.value.length <= 50 ) {
        alert("campo mensaje es obligatorio y debe contener al menos 50 caracteres")
        document.form.mensaje.focus()

    }else if(document.form.email.value.indexOf('@') ==-1 || document.form.email.value.indexOf('.') ==-1){
        alert("email invalido")
        
    }else if (document.form.nombre.value!="" && document.form.email.value !="" && document.form.asunto.value !=""&& document.form.mensaje.value !=""){
        setTimeout(alertaEnviado, 250)
        form.reset()
    }
    
}

function alertaEnviado() {
    
        alert("Mensaje enviado, a la brevedad me pondre en contacto!")
 
}
