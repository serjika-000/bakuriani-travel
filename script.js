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
//about 
document.addEventListener("DOMContentLoaded", function () {
    const galleryLink = document.querySelector('a[href="#about"]');
  
    galleryLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of jumping to the section
      window.location.href = "about.html"; // Redirect to the new gallery page
    });
  });

//gallery
document.addEventListener("DOMContentLoaded", function () {
    const galleryLink = document.querySelector('a[href="#gallery"]');
  
    galleryLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of jumping to the section
      window.location.href = "gallery.html"; // Redirect to the new gallery page
    });
  });



  // Select all anchor links in the navigation
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listener to each link
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        const href = this.getAttribute('href'); // Get the href attribute of the clicked link

        // Check if the link is for a specific page
        if (href === 'about.html' || href === 'gallery.html') {
            window.location.href = href; // Redirect to the respective page
        } else {
            // Smooth scroll to sections (if the link points to an ID on the same page)
            const targetSection = document.getElementById(href.substring(1)); // Get the target section by ID
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth' // Smooth scroll animation
                });
            }
        }

        // Close the mobile menu after clicking a link (if applicable)
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            const navList = document.querySelector('.nav-links');
            navList.classList.remove('active'); // Remove the active class to close the menu
        }
    });
});

// Mobile menu toggle functionality
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        const navList = document.querySelector('.nav-links');
        navList.classList.toggle('active'); // Toggle the active class on click
    });
}

