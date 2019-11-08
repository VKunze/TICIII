document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#registrarse").addEventListener("click",async function() {
        console.log("en registrarse");
        
        var data = {
            usuario: document.getElementById('Usuario').value,
            password: document.getElementById('Contraseña1').value,
            pais: document.getElementById('Pais').value
        };
        
        fetch('ingresar', { 
            method: 'POST',
            body: JSON.stringify(data) ,
            headers:{
                'Content-type': 'application-json'
            }
        
        });

        
    })
    
});



