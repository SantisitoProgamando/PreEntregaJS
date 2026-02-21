//#region Funciones
const productos = [
    { id: 1, nombre: "Monitor Samsung Odyssey G4 240Hz", precio: 250000 },
    { id: 2, nombre: "Monitor Samsung 24'' 60Hz", precio: 150000 },
    { id: 3, nombre: "Teclado Mecánico Redragon", precio: 60000 },
    { id: 4, nombre: "Mouse Logitech G Pro", precio: 80000 }
]

let carrito = [];

function BuscarProducto(id){
    return productos.find(productos => productos.id == id);
}

function CalcularTotal(){
    let total = 0;
    for (let item of carrito){
        total += item.precio;
    } 
    return total;
}

function verCarrito(){
    if (carrito.length === 0){
        alert("Carrito vacio"); return;
    }
    let detalle = "Tu carrito:\n";
    let limite = carrito.length;
    for (let i = 0; i < limite; i++){
        detalle += `- ${carrito[i].nombre} ($${carrito[i].precio})\n`
    }
    detalle += `\nTotal: $${CalcularTotal()}`;
    return detalle;
}
//#endregion

let nombreUsuario = prompt("Ingrese su nombre de usuario:");
let opcionElegida = "";

while (opcionElegida !== "4"){
    opcionElegida = prompt(`Bienvenido/a ${nombreUsuario}. ¿Qué querés hacer?
    1. Comprar un producto
    2. Ver carrito y total
    3. Eliminar el último producto del carrito
    4. Finalizar compra y salir`);

    switch (opcionElegida){
        case "1":
            let idCompra = parseInt(prompt(`Que queres comprar? Ingresa el ID:
                1. Monitor Samsung Oddysey G4 240HZ (250000)
                2. Monitor Samsung 24 pulgadas 60hz (150000)
                3. Teclado mecanico Redragon (60000)
                4. Mouse Logitech G Pro (80.000)`));
            let productoEncontrado = BuscarProducto(idCompra);

            if (productoEncontrado){
                carrito.push(productoEncontrado);
                alert(`Agregarse ${productoEncontrado.nombre} al carrito`);
            } else {alert("ID no valido.")} break;
        case "2":
            alert(verCarrito());
            break;
        case "3":
            if (carrito.length > 0) {
                let productoEliminado = carrito.pop();
                alert(`Elimino ${productoEliminado.nombre}`);
            } else {alert("El carrito ya esta vacio");} break;
        case "4":
            alert(`Gracias por tu compra ${nombreUsuario} \n\n ${verCarrito()}`);
            break;
        default:
            alert("Opcion no valida.");
            break;
    }
}