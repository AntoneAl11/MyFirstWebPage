const productos = [
    { id: 1, nombre: "Pizza Micro", precio: 35 },
    { id: 2, nombre: "Pizza Personal", precio: 99 },
    { id: 3, nombre: "Pizza Grande", precio: 179 },
];

// Función para mostrar los productos en HTML
function mostrarProductos(productos) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Limpiar el contenedor

    productos.forEach((producto) => {
        const html = `
            <div class="producto">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <!-- Más información del producto -->
            </div>
        `;
        container.innerHTML += html; // Agregar el producto al contenedor
    });
}

// Inicializar la visualización de productos
mostrarProductos(productos);