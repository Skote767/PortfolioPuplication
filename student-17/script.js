
// Переключение разделов
function showSection(sectionId, btn) {
    // Скрываем все разделы
    document.querySelectorAll('.portfolio-section').forEach(s => s.style.display = 'none');
    // Убираем active у всех кнопок
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    // Показываем нужный раздел
    document.getElementById(sectionId).style.display = 'block';
    btn.classList.add('active');

    // Прокрутка к контенту на мобильных
    document.querySelector('.portfolio-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
