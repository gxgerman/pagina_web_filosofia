function mostrarDetalle(nombre, precio, descripcion) {
    document.getElementById('detalle-nombre').innerText = nombre;
    document.getElementById('detalle-precio').innerText = precio;
    document.getElementById('detalle-descripcion').innerText = descripcion;

    // Aquí debes establecer la ruta correcta de la imagen del producto
    document.getElementById('detalle-imagen').src = 'ruta_de_la_imagen.jpg';

    document.getElementById('detalle-producto').style.display = 'block';
}

function cerrarDetalle() {
    document.getElementById('detalle-producto').style.display = 'none';
}

function agregarAlCarrito() {
    // Lógica para agregar el producto al carrito (puedes implementar esto según tus necesidades)
    alert('Producto agregado al carrito');
    cerrarDetalle();
}
