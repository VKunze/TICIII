document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#uruguay").addEventListener("click", function() {
        fetch('uruguay', { method: 'POST' });
    })
});

function ocultar() {
    document.getElementById('obj1').style.display = 'none';
    document.getElementById('obj1').style.backgroundColor = black;
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#brasil").addEventListener("click", function() {
        ocultar();
    })
});