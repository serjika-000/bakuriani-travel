// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    // Toggle mobile menu
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    

    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Highlight the active link
    const currentLocation = window.location.pathname;
    const navLinksItems = navLinks.getElementsByTagName('a');

    for (let i = 0; i < navLinksItems.length; i++) {
        const link = navLinksItems[i];
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    }
});

// Optional: Form Submission Handler
const contactForm = document.querySelector('.contact-section form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the actual submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Example of form submission (replace with your logic)
        alert("Thank you for your message! We will get back to you soon.");

        // Reset the form
        contactForm.reset();
    });
}
