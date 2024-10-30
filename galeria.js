let index = 0;

function cambiarFoto(direccion) {
    const fotos = document.querySelectorAll('.carrusel-fotos img');
    index += direccion;

    if (index >= fotos.length) {
        index = 0;
    } else if (index < 0) {
        index = fotos.length - 1;
    }

    const desplazamiento = -index * 100; // -100% por cada imagen
    document.querySelector('.carrusel-fotos').style.transform = `translateX(${desplazamiento}%)`;
}



