global.ingresado = false;

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#registrarse").addEventListener("click", async function() {
        var data = {
            usuario: document.getElementById('UsuarioReg').value,
            password: document.getElementById('Contraseña1').value,
            pais: document.getElementById('Pais').value
        };

        var contraseña2 = document.getElementById('Contraseña2').value;
        if (data['password'] != contraseña2) {
            alert("Las contraseñas ingresadas no son iguales. Intente nuevamente");
        }

        fetch('registrarse', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application-json'
            }
        });
    })

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
        mostrarIngresar();
    })

});

function mostrarIngresar() {
    document.getElementById('IniciarSesion').style.display = 'block';
}