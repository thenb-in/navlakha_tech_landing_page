document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const overlay = document.getElementById('moduleOverlay');
    const closeOverlayBtn = document.getElementById('closeOverlay');
    const overlayDetailsContainer = document.getElementById('overlayDetails');

    moduleCards.forEach(card => {
        card.addEventListener('click', () => {
            const module = card.dataset.module;
            const detailsContent = document.getElementById(`details-${module}`).innerHTML;
            
            overlayDetailsContainer.innerHTML = detailsContent;
            overlay.classList.add('active');
        });
    });

    const closeOverlay = () => {
        overlay.classList.remove('active');
    };

    closeOverlayBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });
});
