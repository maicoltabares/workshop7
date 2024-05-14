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

function Producto(nombre, puntosNecesarios, cantidadDisponible, stock) {
    this.nombre = nombre;
    this.puntosNecesarios = puntosNecesarios;
    this.cantidadDisponible = cantidadDisponible;
    this.stock = stock;
}

Producto.prototype.obtenerInfo = function () {
    console.log(`nombre del producto:: ${this.nombre}`);
    console.log(`Puntos necesarios: ${this.puntosNecesarios}`);
    console.log(`Disponible: ${this.cantidadDisponible}`);
};

// Prototypes specific
function ProductoFisico(nombre, puntosNecesarios, cantidadDisponible, stock, precio) {
    Producto.call(this, nombre, puntosNecesarios, cantidadDisponible, stock);
    this.precio = precio;
}

ProductoFisico.prototype = Object.create(Producto.prototype);
ProductoFisico.prototype.constructor = ProductoFisico;

ProductoFisico.prototype.actualizarStock = function () {
    // Stock update logic
    console.log("Actualización de stock...");
};

ProductoFisico.prototype.enviarProducto = function () {
    // Shipping logic
    console.log("Envío de producto...");
};

function ProductoDigital(nombre, puntosNecesarios, cantidadDisponible, stock, URL) {
    Producto.call(this, nombre, puntosNecesarios, cantidadDisponible, stock);
    this.URL = URL;
}

ProductoDigital.prototype = Object.create(Producto.prototype);
ProductoDigital.prototype.constructor = ProductoDigital;

ProductoDigital.prototype.descargar = function () {
    // Download logic
    console.log("Descargando el producto...");
};

ProductoDigital.prototype.obtenerProductoEmail = function () {
    // Email sending logic
    console.log("Envío de productos por correo electrónico...");
};

function Actividad(tipo, puntosOtorgados) {
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
}

Actividad.prototype.completarActividad = function () {
    // Activity completion logic
    console.log("Completando la actividad...");
};

function CategoriaProducto(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
}

CategoriaProducto.prototype.listarProductos = function () {
    // Listing products logic
    console.log("Listado de productos...");
};

function OrdenCanje(usuario, producto, fecha) {
    this.usuario = usuario;
    this.producto = producto;
    this.fecha = fecha;
}

OrdenCanje.prototype.confirmarOrden = function () {
    // Order confirmation logic
    console.log("Confirmando el pedido...");
};

OrdenCanje.prototype.cancelarOrden = function () {
    // Order cancellation logic
    console.log("Cancelación de pedido...");
};

function Administrador(nombre, email, clave) {
    Entidad.call(this, nombre, email, clave);
}

Administrador.prototype = Object.create(Entidad.prototype);
Administrador.prototype.constructor = Administrador;

Administrador.prototype.agregarProducto = function () {
    // Add product logic
    console.log("Añadiendo producto...");
};

Administrador.prototype.modificarProducto = function () {
    // Modify product logic
    console.log("Modificando el producto...");
};

Administrador.prototype.eliminarUsuario = function () {
    // Delete user logic
    console.log("Eliminar usuario...");
};

// Usuario
function Usuario(nombre, email, clave, puntosAcumulados) {
    Entidad.call(this, nombre, email, clave);
    this.puntosAcumulados = puntosAcumulados;
}

Usuario.prototype = Object.create(Entidad.prototype);
Usuario.prototype.constructor = Usuario;

Usuario.prototype.acumularPuntos = function (puntos) {
    this.puntosAcumulados += puntos;
};

Usuario.prototype.canjearPuntos = function (producto) {
    if (this.puntosAcumulados >= producto.puntosNecesarios) {
        this.puntosAcumulados -= producto.puntosNecesarios;
        // Canjeo de puntos logic
        console.log("Puntos canjeados...");
    } else {
        console.log("Puntos insuficientes...");
    }
};

// Client
function Cliente(nombre, email, clave, puntosAcumulados) {
    Usuario.call(this, nombre, email, clave, puntosAcumulados);
}

Cliente.prototype = Object.create(Usuario.prototype);
Cliente.prototype.constructor = Cliente;

// Overriding authentication method
Cliente.prototype.autenticar = function () {
    // Authentication logic for clients
    console.log("Authenticating client...");
};

// Repartidor
function Repartidor(nombre, email, clave) {
    Entidad.call(this, nombre, email, clave);
}

Repartidor.prototype = Object.create(Entidad.prototype);
Repartidor.prototype.constructor = Repartidor;

// Overriding authentication method
Repartidor.prototype.autenticar = function () {
    // Authentication logic for delivery personnel
    console.log("Autenticar al personal de reparto...");
};
