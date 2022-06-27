class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

const productos = [];
let salida = ""



let entrada = prompt("Programa para ingresar productos \nCuantos productos va agregar?")

for (let index = 0; index < entrada; index++) {
    let idProducto = index + 1
    let nombreProducto = prompt("Ingrese nombre del producto")
    let precioProducto = prompt("Ingrese precio del producto")
    productos.push(new Producto(idProducto, nombreProducto, precioProducto));
}
console.log("Los productos ya fueron cargados");
console.log(productos);
console.log("");



let precioPorCantidad = 0

do {
    let elementoProducto = prompt("Ingrese el nombre del producto que desea comprar?")
    elementoProducto = elementoProducto.toUpperCase()
    const filtroProducto = productos.filter((el) => el.nombre.includes(elementoProducto))

    let cantidadProducto = parseInt(prompt("Que cantidad quiere?"))

    precioPorCantidad +=filtroProducto[0].precio*cantidadProducto

    salida = prompt("Si quiere realizar otra compra presiones cualquier tecla \n Si quiere salir escriba ESC")

} while (salida != "ESC")

console.log("Precio final por la compra: $" +precioPorCantidad);



for (const producto of productos) {
    let tarjetaProductos = document.createElement("div");
    
    tarjetaProductos.innerHTML=  `<div class="card"  
   

    <h2> ID: ${producto.id} </h2>
    <h3> Producto: ${producto.nombre} </h3>
    <h3> Precio: $ ${producto.precio} </h3>
    </div>`;
    document.body.appendChild(tarjetaProductos);
}