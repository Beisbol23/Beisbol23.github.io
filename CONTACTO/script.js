document.getElementById('btnInicioSesion').addEventListener('click', function () {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje');

    if (usuario && password) {
        mensaje.textContent = `¡Hola, ${usuario}! Has iniciado sesión correctamente.`;
    } else {
        mensaje.textContent = 'Por favor, completa todos los campos.';
        mensaje.style.color = 'red';
    }
});
