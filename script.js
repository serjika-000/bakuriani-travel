// script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission for validation

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();
        let valid = true;

        // Simple Validation
        if (name === '') {
            alert('Please enter your name.');
            valid = false;
        }
        if (email === '' || !validateEmail(email)) {
            alert('Please enter a valid email.');
            valid = false;
        }
        if (message === '') {
            alert('Please enter a message.');
            valid = false;
        }

        if (valid) {
            // Simulate successful submission
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form fields
        }
    });
}

// Email Validation Function
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
