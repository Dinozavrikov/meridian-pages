document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл только для ссылок-якорей на текущей странице
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Обновляем класс active
                document.querySelectorAll('.nav a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
