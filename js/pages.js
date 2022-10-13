//Create a nav bar whith bootstrap
const navBar = document.getElementById("navBar");
navBar.innerHTML = `
                    <nav class="navbar navbar-expand-lg bg-color"> <!--NAV BAR-->
                    <div class="container-fluid mt-2">
                    <a class="navbar-brand" href="#">Oxford Polo Club - Esperanza</a>
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



