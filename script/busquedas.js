document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector("#uruguay").addEventListener("click", function () {
        fetch('uruguay', {method: 'POST'});
    })
});
