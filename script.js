document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del DOM
    const openBtn = document.getElementById('openChatButton');
    const closeBtn = document.getElementById('closeChatButton');
    const chatWidget = document.getElementById('chatWidget');
    const notificationBadge = document.getElementById('notificationBadge');
    
    // Elementos del chat para la animación
    const typingIndicator = document.getElementById('typingIndicator');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const chatOptions = document.getElementById('chatOptions');

    // Variable para controlar si el chat ya se abrió automáticamente (solo una vez)
    let chatOpenedAutomatically = false;

    // --- FUNCIONES DE CHAT ---

    function openChat() {
        if (chatWidget.classList.contains('hidden')) {
            chatWidget.classList.remove('hidden');
            openBtn.style.display = 'none';
            // Ocultar el badge inmediatamente al abrir
            if (notificationBadge) {
                notificationBadge.style.display = 'none';
            }
            
            // Iniciar la secuencia de escritura/opciones
            startTypingSequence();
        }
    }

    function closeChat() {
        chatWidget.classList.add('hidden');
        openBtn.style.display = 'block';
    }

    function startTypingSequence() {
        // 1. Mostrar el indicador de escritura inmediatamente
        typingIndicator.classList.remove('hidden');
        welcomeMessage.classList.add('hidden');
        chatOptions.classList.add('hidden');
        
        // 2. Después de 1.5 segundos, simular que el asistente "termina de escribir"
        setTimeout(() => {
            // Ocultar indicador de escritura
            typingIndicator.classList.add('hidden');
            
            // Mostrar la burbuja de bienvenida y las opciones
            welcomeMessage.classList.remove('hidden');
            
            // Un pequeño retraso adicional para que aparezca la burbuja antes de las opciones
            setTimeout(() => {
                chatOptions.classList.remove('hidden');
            }, 500); 

        }, 1500); 
    }

    // --- LÓGICA DE EVENTOS ---
    
    // 1. Apertura manual (Al hacer clic en el botón)
    openBtn.addEventListener('click', function() {
        // Cancela la apertura automática si estaba pendiente
        clearTimeout(autoOpenTimeout); 
        openChat();
    });

    // 2. Cierre manual (Al hacer clic en la X)
    closeBtn.addEventListener('click', closeChat);

    // 3. Apertura Automática (Si el usuario no ha interactuado)
    const autoOpenTimeout = setTimeout(() => {
        if (!chatOpenedAutomatically) {
            openChat();
            chatOpenedAutomatically = true;
        }
    }, 5000); // Se abre automáticamente después de 5 segundos
});
