

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#truco')

$form.addEventListener('submit', validarDatos)

function validarDatos(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:claudiotorancio@gmail.com?subject=Nombre: ${form.get('nombre')} Correo: ${form.get('email')} Asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`)
    
    
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
       
    }

    
}

function alertaEnviado() {
   
    alert("Datos Validados!")
    $buttonMailto.click()
    form.reset()
 
}

