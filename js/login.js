//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function check(){
    var1 = document.getElementById("correo").value;
    sessionStorage.setItem("user", var1);
}
function login(event){
    event.preventDefault ();
    sessionStorage.setItem("user", user);
    window.location.href = "index.html"
    }
    
    var user = document.getElementById("correo").value;
    
    function user_name(){
        document.getElementsByClassName()
    }
    
    document.addEventListener("DOMContenLoaded", function (e){
        document.addEventListener("user_name").addEventListener("user", user_name);
    });