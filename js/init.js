const CATEGORIES_URL = "http://localhost:3000/categorias";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/productos_publicacion";
const CATEGORY_INFO_URL = "http://localhost:3000/categorias_info";
const PRODUCTS_URL = "http://localhost:3000/productos";
const PRODUCT_INFO_URL = "http://localhost:3000/productos_info";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/productos_comentarios";
const CART_INFO_URL = "http://localhost:3000/carrito_info";
const CART_BUY_URL = "http://localhost:3000/carrito_mensajecompra";
const DESAFIANTE = "http://localhost:3000/carrito_desafiante";
const MASPRODUCTOS = "https://raw.githubusercontent.com/Marcos170393/products-cart-info/main/json"

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//funcion para cerrar sesion de usuario//

function cerrarsesion(){
  localStorage.removeItem("user");
location.href = "index.html"
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("usuario").innerHTML = localStorage.getItem("user");


});
