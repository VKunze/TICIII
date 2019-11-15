var ingresado = false;


document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#ingresar").addEventListener("click", async function() {
        var data = {
            usuario: document.getElementById('UsuarioLog').value,
            password: document.getElementById('Contraseña').value
        };

        fetch('ingresar', {
                method: 'POST',
                body: JSON.stringify(data).then(response => {
                    if (!response.ok) throw Error(response.status);
                    return response;
                }),
                headers: {
                    'Content-type': 'application-json'
                }
            }).then(response => {
                alert("ok");
                ingresado = true;
            })
            .catch(error => alert(error));



    })

    document.querySelector("#busquedasLink").addEventListener("click", async function() {
        console.log('ingresado');
        import { mostrarIngresar } from "busquedas.js";
        mostrarIngresar();

    })

});