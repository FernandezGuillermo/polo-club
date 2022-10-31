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
            <div class="col-xl-12 col-md-12 col-sm-1">
            <img src=${element.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.descripcion}</p>
            <p class="card-text">$ ${element.precio}</p>
            <div class="input-group mb-3">
            <select class="form-select" id="opcionProducto${element.id}">
                <option selected id="2">Elija el</option>
                <option id="talle40" value="40">40</option>
                <option id="talle42" value="42">42</option>
                <option id="talle44" value="44">44</option>
                <option id="talle46" value="46">46</option>
                <option id="talle48" value="48">48</option>
                <option id="talle50" value="50">50</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">Talle</label>
            </div>
            <button id="agregar${element.id}" class="btn btn-primary">Agregar al carrito</button>
            </div>
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

//Funcion que arroja un alert cuando no elijo que talle voy a llevar
function alertWrong(){
    Swal.fire({
        icon: 'error',
        title: 'No ingreso al carrito',
        text: 'Elija el talle de jean que quiere agregar al carrito',
    })
}

fetch(stockProductos)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        validarTalles(datos);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));

function validarTalles(items){
    const talle40 = items.filter(producto => producto.talle40 == 0);
    console.log(talle40);
    const is = document.getElementById("talle40");
    for(let i=0;i<talle40.length;i++){
        document.getElementById("talle40").disabled = "disabled";
    }
}


