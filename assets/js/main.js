document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header.page-header');
    const navLinks = document.querySelectorAll('.nav a');

    // Плавный скролл
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Обновляем активный класс
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Автоматическая подсветка при скролле (Intersection Observer)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                if (id) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
