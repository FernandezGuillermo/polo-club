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
                            <a class="nav-link" href="pages/contact.html">Contacto</a>
                        </li>       
                        </ul>
                    </div>
                    </div>
                    </nav>     
                    `

const fecha = new Date();

//variable que obtiene la hora actual
let hora = fecha.getHours();

const saludo = document.getElementById("text-portada");

//Funcion para saludar dependiendo la hora del dia
function saludar(){
    if(hora > 7 && hora <12) saludo.innerText = "Buenos dias";
    if(hora > 12 && hora <18) saludo.innerText = "Buenas tardes";
    if(hora > 18) saludo.innerText = "Buenas noches";
}

saludar();
