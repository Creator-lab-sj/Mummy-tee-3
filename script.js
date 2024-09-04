js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (optional)
document.querySelector('form').addEventListener('submit', function (e) {
    let valid = true;
    this.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });
    if (!valid) {
        e.preventDefault();
        alert('Please fill out all required fields.');
    }
});