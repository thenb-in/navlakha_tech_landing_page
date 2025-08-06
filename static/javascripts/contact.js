document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successToast = document.getElementById('success-toast');
    const errorToast = document.getElementById('error-toast');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('Name');
            const email = formData.get('Email');
            const message = formData.get('Message');

            // Simple validation
            if (!name || !email || !message) {
                showMessage(errorToast, 'Please fill in all fields.');
                return;
            }

            // Simulate form submission (replace with actual backend integration)
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showMessage(successToast, 'Message sent successfully!');
            }, 2000);
        });
    }
});

// Function to show success or error messages
function showMessage(element, message) {
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    }
}
