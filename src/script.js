document.getElementById('generateImage').addEventListener('click', function () {
    // Obtener los valores del formulario
    const fecha = document.getElementById('fecha').value;
    const presidente = document.getElementById('presidente').value;
    const cancion = document.getElementById('cancion').value;
    const tema = document.getElementById('tema').value;
    const discurso = document.getElementById('discurso').value;
    const congregacion = document.getElementById('congregacion').value;
    const atalaya = document.getElementById('atalaya').value;
    const conductor = document.getElementById('conductor').value;
    const lector = document.getElementById('lector').value;
    const oracion = document.getElementById('oracion').value;

    // Actualizar el contenido del contenedor de imagen
    document.getElementById('fecha-display').textContent = fecha;
    document.getElementById('presidente-display').textContent = presidente;
    document.getElementById('cancion-display').textContent = cancion;
    document.getElementById('tema-display').textContent = tema;
    document.getElementById('discurso-display').textContent = discurso;
    document.getElementById('congregacion-display').textContent = congregacion;
    document.getElementById('atalaya-display').textContent = atalaya;
    document.getElementById('conductor-display').textContent = conductor;
    document.getElementById('lector-display').textContent = lector;
    document.getElementById('oracion-display').textContent = oracion;

    // Mostrar el contenedor de la imagen
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.display = 'block';

    // Generar la imagen
    html2canvas(imageContainer).then(canvas => {
        const link = document.getElementById('download-link');
        link.href = canvas.toDataURL();
        link.download = 'Reunión_Fin_de_Semana.png';
        link.style.display = 'block';
    }).catch(error => {
        console.error('Error generating image:', error);
    });
});
