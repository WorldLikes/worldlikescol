document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const openBtn = document.getElementById('openChatButton');
    const closeBtn = document.getElementById('closeChatButton');
    const chatWidget = document.getElementById('chatWidget');

    // Función para abrir el chat
    openBtn.addEventListener('click', function() {
        chatWidget.classList.remove('hidden');
        openBtn.style.display = 'none'; // Ocultar el botón al abrir el chat
    });

    // Función para cerrar el chat
    closeBtn.addEventListener('click', function() {
        chatWidget.classList.add('hidden');
        openBtn.style.display = 'block'; // Mostrar el botón al cerrar el chat
    });
});
