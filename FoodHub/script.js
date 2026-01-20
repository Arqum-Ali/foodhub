// script.js

// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Sticky Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Category Filters
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        const cards = document.querySelectorAll('.category-card');
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Gallery Filters
const galleryFilterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        const images = document.querySelectorAll('.gallery-grid img');
        images.forEach(img => {
            if (filter === 'all' || img.dataset.category === filter) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});

// Countdown Timers (Dummy)
function startCountdown(id, minutes) {
    let time = minutes * 60;
    const element = document.getElementById(id);
    setInterval(() => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        element.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (time > 0) time--;
    }, 1000);
}
startCountdown('countdown1', 10);
startCountdown('countdown2', 5);
startCountdown('countdown3', 2);

// Reservation Form (Dummy)
document.querySelector('.reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    confirmation.style.animation = 'fadeIn 1s';
    setTimeout(() => { confirmation.style.display = 'none'; }, 3000);
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});