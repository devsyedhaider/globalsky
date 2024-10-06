document.getElementById('navToggle').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('show');
});


// Get modal element
const modal = document.getElementById('contactModal');

// Get open modal button
const contactBtn = document.getElementById('contactBtn');

// Get close button
const closeModal = document.getElementById('closeModal');

// Get the form
const contactForm = document.getElementById('contactForm');

// Open modal
contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

