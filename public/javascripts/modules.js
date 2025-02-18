// function toggleContent(card) {
//     let img = card.querySelector("img");
//     let text = card.querySelector("p");

//     if (img.style.display !== "none") {
//         img.style.display = "none";
//         text.style.display = "block";
//     } else {
//         img.style.display = "block";
//         text.style.display = "none";
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("moduleModal").style.display = "none";

    const modulesContainer = document.querySelector(".modules-container");
    const moduleCards = document.querySelectorAll(".module-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    modulesContainer.classList.add("show"); // Show container
                    moduleCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("show"); // Show each card with delay
                        }, index * 200);
                    });
                    observer.disconnect(); // Trigger only once
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(modulesContainer);

    const canvas = document.getElementById("backgroundCanvas"); // Use existing canvas
const ctx = canvas.getContext("2d");

// Resize canvas dynamically
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // Keep it fullscreen
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Ball properties
const balls = [];
const numBalls = 80; // Keep it reasonable

for (let i = 0; i < numBalls; i++) {
    balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 5, // Keep size fixed
        dx: (Math.random() - 0.5) * 4, // Slow movement
        dy: (Math.random() - 0.5) * 4,
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff"; // White balls

    balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move balls
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Bounce on edges
        if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.dx *= -1;
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) ball.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();

const modal = document.getElementById("moduleModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

moduleCards.forEach((card) => {
    const img = card.querySelector("img");
    const description = card.querySelector(".module-description");

    card.addEventListener("mouseenter", function () {
        img.style.opacity = "0"; // Hide Image
        description.style.display = "block"; // Show Description
    });

    card.addEventListener("mouseleave", function () {
        img.style.opacity = "1"; // Show Image
        description.style.display = "none"; // Hide Description
    });

    card.addEventListener("click", function () {
        modalTitle.innerText = card.querySelector(".module-name").innerText;
        modalDescription.innerText = card.querySelector(".module-description").innerText + " - Detailed view with more information about this module.";
        modal.style.display = "flex";
    });
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal function
window.closeModal = function () {
    modal.style.display = "none";
};
});

