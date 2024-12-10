// Selecciona todos los recuadros
const recuadros = document.querySelectorAll('.recuadro');

recuadros.forEach(recuadro => {
    recuadro.addEventListener('click', () => {
        // Alterna la visibilidad del contenido
        const contenido = recuadro.querySelector('.contenido');
        contenido.style.display = contenido.style.display === 'block' ? 'none' : 'block';
    });
});
