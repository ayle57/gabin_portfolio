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

// Color effect based on scroll position on span elements
const colorSpans = document.querySelectorAll('.numbersSection-content h2 span');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    colorSpans.forEach((span, index) => {
        const baseHue = 200;
        const hueOffset = (scrollY / 5 + index * 40) % 360;
        span.style.color = `hsl(${baseHue + hueOffset}, 70%, 50%)`;
    });
});
