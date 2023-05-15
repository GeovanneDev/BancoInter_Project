    // Obtém referências aos elementos do DOM
    const openButton = document.getElementById('openPopup');
    const closeButton = document.getElementById('closePopup');
    const overlay = document.getElementById('popupOverlay');

    // Função para abrir o pop-up
    function openPopup() {
      overlay.style.display = 'flex';
    }

    // Função para fechar o pop-up
    function closePopup() {
      overlay.style.display = 'none';
    }

    // Associa eventos de clique aos botões
    openButton.addEventListener('click', openPopup);
    closeButton.addEventListener('click', closePopup);