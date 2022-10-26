const contenedorCarrito = document.getElementById("contenedorCarrito");
const contenedorPagar = document.getElementById("contenedorPagar");
const a = localStorage.getItem("carrito");
const carrito = JSON.parse(a);
console.log(a);
console.log(carrito);

    
    //Funcion que elimina el producto del carrito
    const eliminarDelCarrito = (id) => {
        const producto = carrito.find(producto => producto.id === id);
        carrito.splice(carrito.indexOf(producto),1);
        localStorage.setItem('carrito',JSON.stringify(carrito));
        actualizarCarrito();
    } 

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

function pagar(carrito){
    if ( carrito.length != 0){
        console.log("el carrito tiene algo");
    }else{
        console.log("el carrito esta vacio");
        let card = document.createElement("div");
        card.innerHTML = `
                            <div class="card" style="width: 100%;">
                                <div class="card-body">
                                <h5 class="card-title text-center">Tu carrito esta vacio</h5>
                                <p class="card-text">Echa un vistazo a nuestra coleccion, seguro que encuentras lo que necesitas.</p>
                                <a href="../pages/products.html" class="btn btn-primary">SEGUIR COMPRANDO</a>
                                </div>
                            </div>
                        `
        contenedorPagar.appendChild(card);
    }
}


function sumarCompra(item){
    let total = 0;
    item.forEach(producto =>{
        total += producto.precio;
        console.log(total);
    })
}

actualizarCarrito();

sumarCompra(carrito);
pagar(carrito);