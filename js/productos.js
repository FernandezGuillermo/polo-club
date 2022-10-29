class Item{
    //Constructor
    constructor(nombre,talle,precio,img,id){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.img = img;
        this.id = id;
    }
}

//Creo array para carrito
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Tomo el div llamado contenedorProductos
const contenedorProductos = document.getElementById("contenedorProductos");

//Funcion que crea tarjetas dependiendo la cantidad de productos que tenga en el stock de jean
function mostrarProductos(items){
    let card = "";
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
            talle === "Elija el" ? alertWrong() : agregarAlCarrito(element.nombre,talle,element.precio,element.img,element.id); 
            });
        })
    }

//creo un constante que almacena el stock traido del json
const stockProductos = "../json/productos.json"; 

fetch(stockProductos)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        mostrarProductos(datos);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));


    //Funcion que agrega al carrito el item selecionado
    function agregarAlCarrito(nombre,talle,precio,img,id){
    const item = new Item (nombre,talle,precio,img,id);
    carrito.push(item);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    document.getElementById('cartCount').innerHTML = carrito.length;
}

function alertWrong(){
    Swal.fire({
        icon: 'error',
        title: 'No ingreso al carrito',
        text: 'Elija el talle de jean que quiere agregar al carrito',
    })
}







