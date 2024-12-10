// Obtener las tarjetas y el cuadro de información
const positionCards = document.querySelectorAll('.position-card');
const infoBox = document.getElementById('infoBox');

// Función para mostrar información adicional
positionCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const info = card.getAttribute('data-info');
        infoBox.textContent = info;
        infoBox.style.display = 'block';
        infoBox.style.opacity = '1';
    });

    card.addEventListener('mouseout', () => {
        infoBox.style.opacity = '0';
        setTimeout(() => {
            infoBox.style.display = 'none';
        }, 300);
    });
});
