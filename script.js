// Datos de los productos
const productos = [
    {
        id: 1,
        nombre: "Café con Leche",
        descripcion: "Café espresso con leche vaporizada",
        precio: 50,
        imagen: "img/cafe-con-leche.jpg"
    },
    {
        id: 2,
        nombre: "Café Negro",
        descripcion: "Café espresso puro",
        precio: 40,
        imagen: "img/cafe-negro.jpg"
    },
    // Agregar más productos aquí
];

// Función para generar el contenido del catálogo
function generarCatalogo() {
    const catalogo = document.querySelector(".catalogo");
    productos.forEach((producto) => {
        const productoHTML = `
            <article class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
            </article>
        `;
        catalogo.insertAdjacentHTML("beforeend", productoHTML);
    });
}

// Llamar a la función para generar el catálogo
generarCatalogo();