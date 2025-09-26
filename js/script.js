// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Scroll reveal optimization
const revealEls = document.querySelectorAll(
    '.why-us-card, .program-card, .activity-card, .testimonial-card, .gallery-item'
);

let scrollScheduled = false;
function revealOnScroll() {
    if (!scrollScheduled) {
        scrollScheduled = true;
        requestAnimationFrame(() => {
            const triggerPoint = window.innerHeight * 0.85;
            revealEls.forEach(el => {
                if (el.getBoundingClientRect().top < triggerPoint) el.classList.add('reveal');
            });
            scrollScheduled = false;
        });
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
