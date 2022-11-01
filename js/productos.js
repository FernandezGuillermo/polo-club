class Item {
  //Constructor
  constructor(nombre, talle, precio, img, id) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = precio;
    this.img = img;
    this.id = id;
  }
}

//Creo array para carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Tomo el div llamado contenedorProductos
const contenedorProductos = document.getElementById("contenedorProductos");

//Funcion que crea tarjetas dependiendo la cantidad de productos que tenga en el stock de jean
function mostrarProductos(items) {
  let card = "";
  items.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style = "width: 18rem;";
    card.innerHTML = `
            <div class="col-xl-12 col-md-12 col-sm-1">
            <img src=${element.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.descripcion}</p>
            <p class="card-text">$ ${element.precio}</p>
            <div class="input-group mb-3">
            <select class="form-select" id="opcionProducto${element.id}">
                <option selected id="2">Elija el</option>
                <option id="talle40${element.id}" value="40">40</option>
                <option id="talle42${element.id}" value="42">42</option>
                <option id="talle44${element.id}" value="44">44</option>
                <option id="talle46${element.id}" value="46">46</option>
                <option id="talle48${element.id}" value="48">48</option>
                <option id="talle50${element.id}" value="50">50</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">Talle</label>
            </div>
            <button id="agregar${element.id}" class="btn btn-primary">Agregar al carrito</button>
            </div>
            </div>
        `;
    contenedorProductos.appendChild(card);

    let botonAgregar = document.getElementById(`agregar${element.id}`);

    botonAgregar.addEventListener("click", () => {
      const talle = document.getElementById(`opcionProducto${element.id}`).value;
      talle === "Elija el" ? alertWrong(): agregarAlCarrito(element.nombre,talle,element.precio,element.img,element.id);
    });
  });
}

//creo un constante que almacena el stock traido del json
const stockProductos = "../json/productos.json";

fetch(stockProductos)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    mostrarProductos(datos);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Proceso Finalizado"));

//Funcion que agrega al carrito el item selecionado
function agregarAlCarrito(nombre, talle, precio, img, id) {
  const item = new Item(nombre, talle, precio, img, id);
  carrito.push(item);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("cartCount").innerHTML = carrito.length;
}

//Funcion que arroja un alert cuando no elijo que talle voy a llevar
function alertWrong() {
  Swal.fire({
    icon: "error",
    title: "No ingreso al carrito",
    text: "Elija el talle de jean que quiere agregar al carrito",
  });
}

fetch(stockProductos)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    validarTalles(datos);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Proceso Finalizado"));

//funcion que valida si hay talle en ese producto si no hay lo setea en disabled
function validarTalles(items) {
  const talle40 = items.filter((producto) => producto.talle40 == 0);
  const talle42 = items.filter((producto) => producto.talle42 == 0);
  const talle44 = items.filter((producto) => producto.talle44 == 0);
  const talle46 = items.filter((producto) => producto.talle46 == 0);
  const talle48 = items.filter((producto) => producto.talle48 == 0);
  const talle50 = items.filter((producto) => producto.talle50 == 0);

  talle40.forEach((element) => {
    document.getElementById(`talle40${element.id}`).disabled = "disabled";
  });

  talle42.forEach((element) => {
    document.getElementById(`talle42${element.id}`).disabled = "disabled";
  });

  talle44.forEach((element) => {
    document.getElementById(`talle44${element.id}`).disabled = "disabled";
  });

  talle46.forEach((element) => {
    document.getElementById(`talle46${element.id}`).disabled = "disabled";
  });

  talle48.forEach((element) => {
    document.getElementById(`talle48${element.id}`).disabled = "disabled";
  });

  talle50.forEach((element) => {
    document.getElementById(`talle50${element.id}`).disabled = "disabled";
  });
}
