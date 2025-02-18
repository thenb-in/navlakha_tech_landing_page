// EmailJS initialization (do this only once)
import emailjs from 'emailjs-com';

emailjs.init("rmf_eeWczP7xrnuN9");  // Replace with your actual EmailJS User ID


document.getElementById('contact-form').addEventListener('submit', function(event) {
   
    event.preventDefault();
    console.log(event.target,"hiiiiiiiiiiiiiiiiiiiii")
    // Validate Name and Phone Number fields
    var name = document.getElementById('ijowk-9').value;
    var phoneNumber = document.getElementById('imgis-8').value;

    if (!name || !phoneNumber) {
        alert('Both Name and Phone Number are required!');
        return;  // Stop further execution
    } else if (isNaN(phoneNumber)) {
        alert('Phone Number must be a valid number!');
        return;
    }

    let success = document.getElementById('success-toast');
    let error = document.getElementById('error-toast');
    let btn = document.getElementById('submit-btn');
    
    // Change button to loading state
    btn.innerHTML = '<div class="loader"></div>';

    // Send form data using emailjs.sendForm
    emailjs.sendForm('service_qr73iz6', 'template_r8ox32l', event.target)
        .then(response => {
            event.target.reset();  // Reset the form after successful submission
            btn.innerHTML = `<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>`;  // Reset button text
            if(response.status === 200) {
                showMessage(success);  // Show success message
            } else {
                showMessage(error);  // Show error message if response is not 200
            }
        })
        .catch(error => {
            event.target.reset();
            showMessage(error);  // Show error message if the request failed
        });
});

// Function to show success or error messages
function showMessage(elem) {
    elem.style.display = 'flex';
    setTimeout(() => {
        elem.style.display = 'none';
    }, 3000);  // Hide message after 3 seconds
}
