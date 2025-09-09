// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.getElementById('main-content');
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
// Close sidebar when clicking outside (mobile UX)
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});
// Navigation
const homeLink = document.getElementById('home-link');
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cover').scrollIntoView({ behavior: 'smooth' });
    sidebar.classList.remove('active');
});
const contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    sidebar.classList.remove('active');
});
// About Us modal
const aboutLink = document.getElementById('about-link');
const aboutModal = document.getElementById('about-modal');
const closeModal = document.querySelector('.close-modal');
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutModal.style.display = 'flex';
    sidebar.classList.remove('active');
});
closeModal.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});
// Job slider
const jobSlider = document.querySelector('.job-slider');
const slideLeft = document.getElementById('slide-left');
const slideRight = document.getElementById('slide-right');
slideLeft.addEventListener('click', () => {
    jobSlider.scrollBy({ left: -260, behavior: 'smooth' });
});
slideRight.addEventListener('click', () => {
    jobSlider.scrollBy({ left: 260, behavior: 'smooth' });
});
