function ocultar() {
    document.getElementById('obj1').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", function() {
        fetch('uruguay', { method: 'POST' });
    })
});