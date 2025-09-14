let currentLang = 'en';

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            document.getElementById('current-lang').textContent = currentLang.toUpperCase();
            
            // Update all text elements
            const elements = document.querySelectorAll('[data-en][data-pt]');
            elements.forEach(element => {
                const text = element.getAttribute(`data-${currentLang}`);
                if (text) {
                    element.textContent = text;
                }
            });
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            // Show success message
            const successMsg = currentLang === 'en' ? 'Message sent successfully!' : 'Mensagem enviada com sucesso!';
            alert(successMsg);
            
            // Reset form
            event.target.reset();
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all cards for animation
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card');
            cards.forEach(card => {
                observer.observe(card);
            });
        });

        // Add parallax effect to hero background
       
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const parallax = scrolled * 0.2;
            hero.style.transform = `translateY(${parallax}px)`;
        });

       

        // Add typing effect to hero title (optional enhancement)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.textContent = '';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Initialize typing effect on load
        document.addEventListener('DOMContentLoaded', () => {
            const heroTitle = document.querySelector('.hero-title');
            const titleText = heroTitle.textContent;
            setTimeout(() => {
                typeWriter(heroTitle, titleText, 50);
            }, 1000);
        });