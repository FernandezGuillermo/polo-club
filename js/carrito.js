const contenedorCarrito = document.getElementById("contenedorCarrito");
const a = localStorage.getItem("carrito");
const b = JSON.parse(a);
console.log(a);
console.log(b);




function mostrarCarrito(items){
    items.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.style="width :18rem;"
        card.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../resources/img-1.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">${element.nombre}</h5>
                                <button type="button" class="btn-close d-block" aria-label="Close"></button>
                                <p class="card-text">Talle: ${element.talle}</p>
                                <p class="card-text">Precio: $${element.precio}</p>
                                <button class="btn btn-primary">Pagar</button>
                                </div>
                            </div>
                            </div>
                        </div>
        `
        contenedorCarrito.appendChild(card);
    });
}

/*     //Funcion que actualiza el carrito
    function actualizarCarrito(){
        let aux = "";
        b.forEach(producto => {
            aux += `
                    <p>Producto agregado: ${producto.nombre}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p>Precio: $${producto.precio}</p>
                    <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
            `
        })
        contenedorCarrito.innerHTML = aux;
    }
    
    //Funcion que elimina el producto del carrito
    const eliminarDelCarrito = (id) => {
        const producto = carrito.find(producto => producto.id === id);
        carrito.splice(carrito.indexOf(producto),1);
        actualizarCarrito();
    } */

mostrarCarrito(b);

