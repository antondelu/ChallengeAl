
const usernav = document.getElementById("usuario")
const close = document.getElementById("cerrar")

let username = localStorage.getItem('user');

if (username != null) {
  usernav.innerHTML = '<a class="py-2 d-none d-md-inline-block" href="#" id="usuario">' + username + '</a>'

}

else {
  usernav.innerHTML = '<a  href="index.html" class="py-2 d-none d-md-inline-block" href="#" id="usuario"> Iniciar sesion </a>';
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
});