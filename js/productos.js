class Item{
    //Constructor
    constructor(nombre,talle,precio){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
    }
}

//Creo array para carrito
const carrito =[];

const contenedorProductos = document.getElementById("contenedorProductos");

//Funcion que crea tarjetas dependiendo la cantidad de productos que tenga en el stock de jean
function mostrarProductos(items){
    items.forEach(element => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.style="width: 18rem;"
        card.innerHTML=`
            <img src=${element.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.descripcion}</p>
            <p class="card-text">$ ${element.precio}</p>
            <div class="input-group mb-3">
            <select class="form-select" id="opcionProducto${element.id}">
                <option selected id="2">Elija el</option>
                <option value="40">40</option>
                <option value="42">42</option>
                <option value="44">44</option>
                <option value="46">46</option>
                <option value="48">48</option>
                <option value="50">50</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">Talle</label>
            </div>
            <button id="agregar${element.id}" class="btn btn-primary">Agregar al carrito</button>
            </div>
        `
        contenedorProductos.appendChild(card);
        
        let botonAgregar=document.getElementById(`agregar${element.id}`);
        
        botonAgregar.addEventListener("click", ()=>{
            const talle = document.getElementById(`opcionProducto${element.id}`).value;
            talle === "Elija el" ? alert("Elija el talle de jean que quiere agregar al carrito") : agregarAlCarrito(element.nombre,talle,element.precio); 
            });
        })
    }


const stockProductos = "../json/productos.json"; 

fetch(stockProductos)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        mostrarProductos(datos);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));


    //Funcion que agrega al carrito el item selecionado
    function agregarAlCarrito(nombre,talle,precio){
    const item = new Item (nombre,talle,precio);
    carrito.push(item);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

const contenedorCarrito = document.getElementById("contenedorCarritos");

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





