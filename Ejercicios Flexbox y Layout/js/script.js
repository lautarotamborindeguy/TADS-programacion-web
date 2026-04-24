document.addEventListener('DOMContentLoaded', () => {

    const scrollTopBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });


    const header = document.getElementById('site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = 'none';
        }
    });


    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchBtn.textContent = '✅';
            setTimeout(() => {
                searchBtn.textContent = '🔍';
            }, 1000);
        } else {
            searchInput.focus();
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });


    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterBtn = document.getElementById('newsletter-btn');
    const newsletterEmail = document.getElementById('newsletter-email');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterEmail.value.trim();

        if (email) {
            const originalText = newsletterBtn.textContent;
            newsletterBtn.textContent = '✅ ¡Suscrito!';
            newsletterBtn.style.background = '#34d399';
            newsletterEmail.value = '';

            setTimeout(() => {
                newsletterBtn.textContent = originalText;
                newsletterBtn.style.background = '';
            }, 2500);
        }
    });


    const exploreBtn = document.getElementById('explore-btn');
    const articlesGrid = document.getElementById('articles-grid');

    exploreBtn.addEventListener('click', () => {
        articlesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });


    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `translateY(-4px) perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });


    const animateCounter = (element, target, suffix = '') => {
        const isK = target.toString().includes('.');
        const numericTarget = parseFloat(target);
        const duration = 1500;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numericTarget;

            if (isK) {
                element.textContent = current.toFixed(1) + 'k';
            } else {
                element.textContent = Math.floor(current) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    const statsSection = document.getElementById('widget-about');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                animateCounter(document.getElementById('stat-articles'), 127);
                animateCounter(document.getElementById('stat-authors'), 24);
                animateCounter(document.getElementById('stat-readers'), 3.2);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);


    const badge = document.getElementById('special-badge');
    setTimeout(() => {
        badge.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            badge.style.display = 'none';
        }, 500);
    }, 8000);


    const categoryTags = document.querySelectorAll('.category-tag');

    categoryTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();

            tag.classList.toggle('active');

            if (tag.classList.contains('active')) {
                tag.style.background = 'rgba(124, 92, 252, 0.15)';
                tag.style.color = '#9478ff';
                tag.style.borderColor = '#7c5cfc';
            } else {
                tag.style.background = '';
                tag.style.color = '';
                tag.style.borderColor = '';
            }
        });
    });

});
