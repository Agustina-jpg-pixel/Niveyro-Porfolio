const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let currentGalleryImages = [];

// Función para mostrar la imagen en el popup
function showPopup(index) {
    popupImg.src = currentGalleryImages[index].src;
    popup.style.display = 'flex';
    currentIndex = index;
}

// Función para agregar los eventos a las imágenes de cada galería
function setupGallery(gallery) {
    const galleryImages = gallery.querySelectorAll('.gallery-image');
    
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentGalleryImages = galleryImages; // Establecer las imágenes de la galería actual
            showPopup(index);
        });
    });
}

// Obtener todas las galerías y sus imágenes
document.querySelectorAll('.gallery').forEach(gallery => {
    setupGallery(gallery);
});

// Evento para cerrar el popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Navegación de imágenes
prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = (currentIndex === 0) ? currentGalleryImages.length - 1 : currentIndex - 1;
    showPopup(currentIndex);
});

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = (currentIndex === currentGalleryImages.length - 1) ? 0 : currentIndex + 1;
    showPopup(currentIndex);
});

// Cerrar el popup al hacer clic fuera de la imagen
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});





