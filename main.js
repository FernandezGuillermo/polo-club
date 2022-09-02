
class Producto{
    constructor(nombre,talle,cantidad,precio){
        this.nombre = nombre;
        this.talle = talle;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    stock(){
        return this.cantidad;
    }
}

let jeans = new Producto("Kansas",46,8,12500);

console.log(jeans.stock());