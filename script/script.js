var pais = {
    uru : false,
    bra : false
};

document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector("#uruguay").addEventListener("click", function () {
        pais.uru = true;
        actualizarDatos();

        /* $ajaxUtils.sendGetRequest("./busquedas.html", function(request){
            self.name = request.responseText;
        }); */
    })
});


function actualizarDatos(){
    var hola = "chau";
    document.querySelector("#brasil").innerHTML = "HOOOOOLLLLLLAAAAAAAA";
}; 