const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Create a nav bar whith bootstrap
const navBar = document.getElementById("navBar");
navBar.innerHTML = `
                    <nav class="navbar navbar-expand-lg bg-color"> <!--NAV BAR-->
                    <div class="container-fluid mt-2">
                    <a class="navbar-brand" href="#">
                        <img src="resources/img-polo-nav.png" alt="Logo Polo" width="30" height="30">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pages/products.html">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pages/signIn.html">Sign In</a>
                        </li>
                        <li class="nav-item">
                            <a class="navbar-brand" href="pages/carrito.html">
                                <img src="../resources/img-carrito.png" alt="Logo Polo" width="20" height="20">
                                <span id="cartCount" class="position-absolute top-20 start-92 translate-middle badge rounded-pill bg-danger">
                                ${carrito.length} <!-- Cambio el valor del numero del span --!>
                                <span class="visually-hidden">unread messages</span>
                            </a>
                        </li>       
                        </ul>
                    </div>
                    </div>
                    </nav>     
                    `
//Creo variable para alojar fecha
const fecha = new Date();

//Variable que obtiene la hora actual
let hora = fecha.getHours();

const saludo = document.getElementById("text-portada");

//Funcion para saludar dependiendo la hora del dia
function saludar(){
    if(hora > 7 && hora <12) saludo.innerText = "Buenos dias";
    if(hora > 12 && hora <18) saludo.innerText = "Buenas tardes";
    if(hora > 18) saludo.innerText = "Buenas noches";
}

saludar();

