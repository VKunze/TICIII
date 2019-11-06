document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", async function() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html'
            }
        };
        fetch('/uruguay', options).then(function(response){
            var texto = response.text();
            return texto;
        }).then(function(html){
            $('#uruguay').html(html);
            console.log(html);
        });
        mostrarBasesUy();
    })
    document.querySelector("#ImpTyA").addEventListener("click", function() {
        mostrarTablaImpTyA();
    })
});

function mostrarBasesUy() {
    document.getElementById('obj1').style.display = 'block';
}

function mostrarTablaImpTyA() {
    document.getElementById('TablaImpTyA').style.display = 'block';
}
