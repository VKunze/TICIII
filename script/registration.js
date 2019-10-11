document.addEventListener("DOMContentLoaded",
  function (event) {
    //console.log(event);
    // Unobtrusive event binding
    //console.log(document.getElementById("nombre"));
    if (document.querySelector("nombre")){
        document.getElementById("nombre").addEventListener('change', function(){
            console.log(globalThis);
        });
        
        
        
        /* document.querySelector("nombre").addEventListener("input", function () {
            console.log(globalThis);
        }); */
    }
    
        // Call server to get the name
        /* 
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });
 */
        
      
  }
);