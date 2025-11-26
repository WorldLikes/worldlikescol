document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const openBtn = document.getElementById('openChatButton');
    const closeBtn = document.getElementById('closeChatButton');
    const chatWidget = document.getElementById('chatWidget');

    // Función para abrir el chat al hacer clic
    openBtn.addEventListener('click', function() {
        chatWidget.classList.remove('hidden'); // Muestra el widget
        openBtn.style.display = 'none';      // Oculta el botón flotante
    });

    // Función para cerrar el chat
    closeBtn.addEventListener('click', function() {
        chatWidget.classList.add('hidden'); // Oculta el widget
        openBtn.style.display = 'block';    // Muestra de nuevo el botón flotante
    });
});
