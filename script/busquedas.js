
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", function() {
        fetch('uruguay', { method: 'POST' });
        mostrar();
    })
});

function mostrar() {
    document.getElementById('obj1').style.display = 'block';
}