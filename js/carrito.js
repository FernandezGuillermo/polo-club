const contenedorCarrito = document.getElementById("contenedorCarrito");
const contenedorPagar = document.getElementById("contenedorPagar");
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

console.log(carrito);

    
//Funcion que elimina el producto del carrito
const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    document.getElementById('cartCount').innerHTML = carrito.length;
    actualizarCarrito();
    pagar(carrito);
} 

//Funcion que actuliza el carrito
function actualizarCarrito(){
    let card = "";
    carrito.forEach(producto => {
        card += `
            <div class="card m-3" style="max-width:18rem;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src= ${producto.img} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <button onClick = "eliminarDelCarrito(${producto.id})" type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" id="eliminar${producto.id}"></button>
                <p class="card-text">Talle: ${producto.talle}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
                </div>
            </div>
            </div>
        </div>
        `
    })
    contenedorCarrito.innerHTML = card;
}

//Funcion que realiza el pago de los items
function pagar(carrito){
    let card = document.createElement("div");
    contenedorPagar.innerHTML = "";
    if ( carrito.length != []){
        
        card.innerHTML = `
                            <div class="card" style="width: 100%;">
                                <div class="card-body">
                                <h5 class="card-title text-center">Productos</h5>
                                <p class="card-text" id="cartCount">Cantidad de productos: ${carrito.length}</p>
                                <p class="card-text">Cantidad de productos: ${sumarCompra(carrito)}</p>
                                <button id="pagar${carrito.id}" class="btn btn-primary">PAGAR</button>
                                </div>
                            </div>
                            <div class="card mt-3" style="width: 100%;">
                                <div class="card-body">
                                <h5 class="card-title text-center">Necesitas ayuda</h5>
                                <p class="card-text text-center">Ponete en contacto con nosotros o visita nuestro local</p>
                                <p class="card-text text-center">Lehmann 1339 - +54 342 530-4765</p>
                                </div>
                            </div>
                        `
        contenedorPagar.appendChild(card);
        //Capturo el boton pagar
        let botonPagar = document.getElementById(`pagar${carrito.id}`);
        //Escucho el evento click en el boton pagar
        botonPagar.addEventListener("click",()=>{
            aceptarPago();
        })
    }else{

        card.innerHTML = `
                            <div class="card" style="width: 100%;">
                                <div class="card-body">
                                <h5 class="card-title text-center">Tu carrito esta vacio</h5>
                                <p class="card-text">Echa un vistazo a nuestra coleccion, seguro que encuentras lo que necesitas.</p>
                                <a href="../pages/products.html" class="btn btn-primary">SEGUIR COMPRANDO</a>
                                </div>
                            </div>
                            <div class="card mt-3" style="width: 100%;">
                                <div class="card-body">
                                <h5 class="card-title text-center">Necesitas ayuda</h5>
                                <p class="card-text text-center">Ponete en contacto con nosotros o visita nuestro local</p>
                                <p class="card-text text-center">Lehmann 1339 - +54 342 530-4765</p>
                                </div>
                            </div>
                        `
        contenedorPagar.appendChild(card);
        actualizarCarrito();
    }
}

//Funcion que suma y retorna el precio total
function sumarCompra(item){
    let total = 0;
    item.forEach(producto =>{
        total += producto.precio;        
    })
    return total;
}

//Funcion para aceptar o no el pago
function aceptarPago(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Estas por finalizar la compra',
        text: "Gracias por comprarnos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Acepto',
        cancelButtonText: 'Seguir Comprando',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Has finalizado',
                'Gracias por comprarnos.',
                'success'
        )
        } else if (
          /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'No has finalizado la compra',
            'Sigue comprando',
            'error'
        )
        }
    })
}

actualizarCarrito();

sumarCompra(carrito);
pagar(carrito);