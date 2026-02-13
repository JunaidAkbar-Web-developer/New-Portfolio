    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('#nav-menu');
    const menuIcon = document.querySelector('#menu-icon');
    const themeBtn = document.querySelector('#theme-btn');
    const themeIcon = document.querySelector('#theme-icon');

    // 1. Toggle Mobile Menu
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu'); // Changed name to avoid styling conflict
        
        if (navMenu.classList.contains('show-menu')) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // 2. Toggle Dark/Light Mode
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            menuIcon.classList.replace('bx-x', 'bx-menu');
        });
    });
//Header section javascrite ending point
//Home page
const textElement = document.querySelector(".typing-text");
const roles = ["Frontend Developer", "Backend Developer","Full-stuck developer", "Web Designer"];
let roleIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < roles[roleIndex].length) {
        textElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

//end home page


// testimonials

const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;

// Create dots dynamically
cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    const dots = document.querySelectorAll('.dot');
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next', 'hidden');
        dots[index].classList.remove('active');

        if (index === currentIndex) {
            card.classList.add('active');
            dots[index].classList.add('active');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('prev');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('next');
        } else {
            card.classList.add('hidden');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initial state
updateCarousel();




