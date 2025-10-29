// Navbar button hover effect
const navbarButton = document.querySelector('a.btn.btn-blurred');
navbarButton.addEventListener('mousemove', e => {
    const rect = navbarButton.getBoundingClientRect();
    navbarButton.style.setProperty('--x', `${e.clientX - rect.left}px`);
    navbarButton.style.setProperty('--y', `${e.clientY - rect.top}px`);
});

// Navbar background change on scroll
const navbarLinks = document.querySelector('.navbar-links');
const heroSection = document.querySelector('.heroSection');
window.addEventListener('scroll', () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 200;

    if (window.scrollY > heroBottom) {
        navbarLinks.classList.add('scrolled');
    } else {
        navbarLinks.classList.remove('scrolled');
    }
});
