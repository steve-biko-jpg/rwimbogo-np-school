document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the menu
            navLinks.classList.toggle('active');

            // Optional: Change the icon (hamburger to X)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Using fa-times for the close icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Simple scroll reveal effect
const revealEls = document.querySelectorAll(
  '.why-us-card, .program-card, .activity-card, .testimonial-card, .gallery-item'
);

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
