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

// Projects slider
const slider = document.getElementById('project-slider');
const items = Array.from(document.querySelectorAll('.project-item'));
const projectsSectionContainer = document.querySelector('.projectsSection-container');
let visible = 3;

function updateVisible() {
    if (window.innerWidth <= 520) visible = 1;
    else if (window.innerWidth <= 900) visible = 2;
    else visible = 3;
}

updateVisible();
window.addEventListener('resize', updateVisible);

let idx = 0;
const total = items.length;

function slide() {
    idx++;
    if (idx > total - visible) idx = 0;

    const itemWidth = items[0].offsetWidth;
    const gap = parseInt(getComputedStyle(slider).gap) || 0;

    const moveX = idx * (itemWidth + gap);
    slider.style.transform = `translateX(-${moveX}px)`;
}

let timer = setInterval(slide, 1500);
slider.addEventListener('mouseenter', () => {
    clearInterval(timer);
    projectsSectionContainer.style.backgroundColor = '#00ffae';
});
slider.addEventListener('mouseleave', () => {
    timer = setInterval(slide, 2500);
    projectsSectionContainer.style.backgroundColor = '#ffffff';
});
