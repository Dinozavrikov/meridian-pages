document.addEventListener('DOMContentLoaded', () => {
    // Логика активного пункта меню при скролле для одной страницы
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
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
    }
});
