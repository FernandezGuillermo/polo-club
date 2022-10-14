
//Funcion que crea tarjetas dependiendo la cantidad de productos agregados al carrito
/* function mostrarCarrito(items){
    let card = document.createElement("div");
    card.classList.add("card");
    card.style="width: 18rem;"
    card.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src=${element.img} class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${element.nombre}</h5>
                            <p class="card-text">${element.precio}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    `
    contenedorCarrito.appendChild(card);
} */


const contenedorCarrito = document.getElementById("contenedorCarrito");

    //Funcion que actualiza el carrito
    function actualizarCarrito(){
        let aux = "";
        carrito.forEach(producto => {
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
    }
