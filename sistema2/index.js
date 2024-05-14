// Prototypes base
function Entidad(nombre, email, clave) {
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

Entidad.prototype.autenticar = function () {
    // Authentication logic
    console.log("Autenticación...");
};

// Prototypes specific
function Cliente(nombre, email, clave, direccion, telefono) {
    Entidad.call(this, nombre, email, clave);
    this.direccion = direccion;
    this.telefono = telefono;
}

Cliente.prototype = Object.create(Entidad.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.realizarPedido = function (restaurante, detallesPedido) {
    // Place order logic
    console.log("Realización de pedidos...");
};

Cliente.prototype.verHistorialPedidos = function () {
    // View order history logic
    console.log("Visualización del historial de pedidos...");
};

function Restaurante(nombre, menu) {
    this.nombre = nombre;
    this.menu = menu;
}

Restaurante.prototype.agregarPlato = function (plato) {
    // Add dish logic
    console.log("Añadiendo plato...");
};

Restaurante.prototype.actualizarPlato = function (plato) {
    // Update dish logic
    console.log("Actualizando el plato...");
};

function RestauranteDigital(nombre, menuQR) {
    Restaurante.call(this, nombre, menuQR);
}

RestauranteDigital.prototype = Object.create(Restaurante.prototype);
RestauranteDigital.prototype.constructor = RestauranteDigital;

function RestauranteFisico(nombre, direccion, menuFisico) {
    Restaurante.call(this, nombre, menuFisico);
    this.direccion = direccion;
}

RestauranteFisico.prototype = Object.create(Restaurante.prototype);
RestauranteFisico.prototype.constructor = RestauranteFisico;

RestauranteFisico.prototype.eliminarPlato = function (plato) {
    // Remove dish logic
    console.log("Quitar el plato...");
};

function Pedido(cliente, restaurante, detallesPedido, estadoPedido) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.detallesPedido = detallesPedido;
    this.estadoPedido = estadoPedido;
}

Pedido.prototype.actualizarEstado = function (nuevoEstado) {
    // Update order status logic
    console.log("Actualizando el estado del pedido...");
};

Pedido.prototype.calcularTotal = function () {
    // Calculate order total logic
    console.log("Calculando el total de la orden...");
};

function Plato(nombre, precio, ingredientes) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
}

Plato.prototype.obtenerInfo = function () {
    console.log(`Nombre del plato: ${this.nombre}`);
    console.log(`Precio: ${this.precio}`);
    console.log(`Ingredientes: ${this.ingredientes.join(", ")}`);
};

function MenuQR(plato, URL) {
    this.plato = plato;
    this.URL = URL;
}

MenuQR.prototype.generarQR = function () {
    // Generate QR code logic
    console.log("Generación de código QR...");
};

function MenuFisico(plato) {
    this.plato = plato;
}

MenuFisico.prototype.impresion = function () {
    // Print menu logic
    console.log("Menú de impresión...");
};

MenuFisico.prototype.visualizacion = function () {
    // View menu logic
    console.log("Menú de visualización...");
};

function MenuDigital(plato, URL) {
    this.plato = plato;
    this.URL = URL;
}

MenuDigital.prototype.consultaEnLinea = function () {
    // Online menu query logic
    console.log("Consulta de menú online...");
};

function EstadoPedido(estado, detallesEstado) {
    this.estado = estado;
    this.detallesEstado = detallesEstado;
}

EstadoPedido.prototype.cambiarEstado = function (nuevoEstado) {
    // Change order status logic
    console.log("Cambiar el estado del pedido...");
};

// Usage example
let restaurante = new RestauranteDigital("Taco House", []);
let cliente = new Cliente("Juan", "juan@example.com", "clave123", "Calle 123", "555-1234");
let pedido = new Pedido(cliente, restaurante, "1 Combo", "Pendiente");

console.log(pedido.calcularTotal());

let plato = new Plato("Burrito", 5.99, ["arroz", "frijoles negros", "queso", "lechuga", "pollo"]);

console.log(plato.obtenerInfo());

let menuQR = new MenuQR(plato, "https://example.com/qr-code");

console.log(menuQR.generarQR());

let menuFisico = new MenuFisico(plato);

console.log(menuFisico.impresion());

let menuDigital = new MenuDigital(plato, "https://example.com/menu");

console.log(menuDigital.consultaEnLinea());

let estadoPedido = new EstadoPedido("Pendiente", "El pedido aún no ha sido procesado.");

console.log(estadoPedido.cambiarEstado("En proceso"));

cliente.autenticar();
cliente.realizarPedido(restaurante, "1 Combo");
cliente.verHistorialPedidos();

restaurante.agregarPlato(plato);
restaurante.actualizarPlato(plato);

let restauranteFisico = new RestauranteFisico("Burger House", "Calle 456", menuFisico);

restauranteFisico.imprimirMenu();
restauranteFisico.visualizarMenu();

restauranteFisico.eliminarPlato(plato);

restauranteFisico.actualizarPlato(plato);
restauranteFisico.eliminarPlato(plato);

console.log(restauranteFisico.impresion());
console.log(restauranteFisico.visualizacion());