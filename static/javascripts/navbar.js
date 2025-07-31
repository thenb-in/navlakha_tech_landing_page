document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menubar = document.querySelector('.menubar');

    if (hamburger && menubar) {
        hamburger.addEventListener('click', () => {
            menubar.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});
