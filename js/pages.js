//Create a nav bar whith bootstrap
const navBar = document.getElementById("navBar");
navBar.innerHTML = `
                    <nav class="navbar navbar-expand-lg bg-color"> <!--NAV BAR-->
                    <div class="container-fluid mt-2">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../resources/img-polo-nav.png" alt="Logo Polo" width="30" height="30">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="products.html">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="signIn.html">Sign In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contacto</a>
                        </li>       
                        </ul>
                    </div>
                    </div>
                    </nav>     
                    `

const footer = document.getElementById("footer");

//Create a footer whit bootstrap
footer.innerHTML = `
                <article class="row">
                <div class="col-xl-3 my-auto text-center footer__text">
                    <p class="footer__text">Folow Us</p>
                    <a href="https://www.instagram.com/polo.esperanza/?hl=es-la"><img src="../resources/img-instagram.png" alt="instagram" class="footer__instagram" id="icono-instagram"></a>
                    <a href="https://es-la.facebook.com/poloclubesperanza/"><img src="../resources/img-facebook.png" alt="facebook" class="footer__facebook" id="icono-facebook"></a>
                </div>
                <div class="col-xl-6 text-center my-auto">
                    <p class="footer__text">Contact Us</p>
                    <p class="footer__text">Lehmann 1339</p>
                    <p class="footer__text">+54 342 530-4765</p>
                </div>
                <div class="col-xl-3 my-auto text-center">
                    <img src="../resources/img-polo-nav.png" alt="logo marca" class="footer-logo mt-3">
                    <p class="footer-text-logo text-center">Local exclusivo Oxford Polo Club</p>
                </div>
            </article>
            <article class="row">
                <div class="float-end">
                    <p class="footer__text text-center">© Todos los derechos reservados</p>
                </div>
            </article>
`


