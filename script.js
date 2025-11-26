document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const openBtn = document.getElementById('openChatButton');
    const closeBtn = document.getElementById('closeChatButton');
    const chatWidget = document.getElementById('chatWidget');

    // --- NUEVA LÓGICA: ABRIR AUTOMÁTICAMENTE ---
    
    // Función para abrir el chat (reutilizada)
    function openChat() {
        chatWidget.classList.remove('hidden'); // Muestra el widget
        openBtn.style.display = 'none';      // Oculta el botón flotante
    }

    // Abrir el chat automáticamente después de un pequeño retraso (ej. 1 segundo)
    // El retraso hace que la página cargue primero el contenido principal, lo cual es mejor.
    setTimeout(openChat, 1000); // 1000 milisegundos = 1 segundo
    
    // --- LÓGICA EXISTENTE: CERRAR MANUALMENTE ---
    
    // Función para cerrar el chat
    closeBtn.addEventListener('click', function() {
        chatWidget.classList.add('hidden'); // Oculta el widget
        openBtn.style.display = 'block';    // Muestra de nuevo el botón flotante
    });
});
