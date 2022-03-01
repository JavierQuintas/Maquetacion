jQuery(() => {
$('#btn-carrito').on('click', () => {
    if (productosCarrito.length > 0){
        toggleCarrito();
    }else {
        alert('El carrito está vacío');
    }
});

})