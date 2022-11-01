const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {

    event.preventDefault();

    const from_name = document.getElementById("from_name").value;
    const email_id = document.getElementById("email_id").value;
    const message = document.getElementById("message").value;
    const pasajeros = document.getElementById("pasajeros").value;

        from_name == "" && Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para poder enviar el mail debe completar el campo "nombre"'
        });
        email_id == "" && Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para poder enviar el mail debe completar el campo "email"'
        });
        message == "" && Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para poder enviar el mail debe completar el campo "Describa su solicitud de servicio"'
        }) 
        
        if(from_name && email_id  && message && pasajeros != "") {
    
        const btn = document.getElementById('button');
        
        btn.value = 'Enviar';
    
        const serviceID = 'default_service';
        const templateID = 'Monte Grande Bus Templat';
    
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se a enviado el mail',
                showConfirmButton: false,
                timer: 3000
            });
        }, (err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });  
    }
});
   
