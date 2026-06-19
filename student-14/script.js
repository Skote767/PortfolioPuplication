
function showSection(sectionId, btn) {
    document.querySelectorAll('.portfolio-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(sectionId).style.display = 'block';
    btn.classList.add('active');
    document.querySelector('.portfolio-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Переключение фото внутри одной галереи
function galleryMove(galleryId, direction) {
    const gallery = document.getElementById(galleryId);
    const slides = gallery.querySelectorAll('.gallery-slide');
    const counter = document.getElementById(galleryId + '-counter');

    let currentIndex = 0;
    slides.forEach((s, i) => { if (s.style.display !== 'none') currentIndex = i; });

    slides[currentIndex].style.display = 'none';
    let newIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[newIndex].style.display = 'block';

    if (counter) counter.textContent = (newIndex + 1) + ' / ' + slides.length;
}
