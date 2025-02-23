// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    form.addEventListener('submit', function(event) {
        let valid = true;

        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Please enter your name.');
        }

        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            valid = false;
            alert('Please enter a valid email address.');
        }

        if (messageInput.value.trim() === '') {
            valid = false;
            alert('Please enter your message.');
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
