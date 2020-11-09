//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function check(){
    var1 = document.getElementById("correo").value;
    localStorage.setItem("user", var1);
}
function login(event){
    event.preventDefault ();
    //sessionStorage.setItem("user", user);//   

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;

    let datos = {"nombre": "", "apellido": "", "edad": "", "telefono": "", "correo": correo, "direccion": ""}

    localStorage.setItem('Datos', JSON.stringify(datos));
    
    window.location.href = "index.html"
    }
    
    var user = document.getElementById("correo").value;
    
    function user_name(){
        document.getElementsByClassName()
    }
    
    document.addEventListener("DOMContenLoaded", function (e){
        document.addEventListener("user_name").addEventListener("user", user_name);

        
    });

    