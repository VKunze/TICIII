document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", function() {
        $.post("uruguay");
        
        //fetch('uruguay', { method: 'POST' });
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
