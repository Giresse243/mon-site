class TestimonialCarousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.testimonials = [];
        this.currentSlide = 0;
        this.autoRotateInterval = null;
        this.isAutoRotating = true;

        this.loadTestimonials();
    }

    async loadTestimonials() {
        try {
            const response = await fetch('/assets/data/testimonials.json');
            this.testimonials = await response.json();
            this.render();
            this.startAutoRotate();
        } catch (error) {
            console.error('Error loading testimonials:', error);
            this.loadFallbackTestimonials();
        }
    }

    loadFallbackTestimonials() {
        // Fallback testimonials data
        this.testimonials = [
            {
                id: 1,
                name: "Marie Dubois",
                title: "CEO",
                company: "TechStart Congo",
                avatar: "MD",
                rating: 5,
                content: "Giresse a transformé notre vision en une application mobile exceptionnelle. Son expertise en Flutter et son approche professionnelle ont dépassé nos attentes. Je recommande vivement ses services.",
                project: "Application Mobile E-commerce",
                date: "2024-12"
            },
            {
                id: 2,
                name: "Jean-Paul Mukendi",
                title: "Directeur Marketing",
                company: "Digital Solutions RDC",
                avatar: "JPM",
                rating: 5,
                content: "L'intégration d'IA dans nos processus marketing par Giresse a augmenté notre efficacité de 300%. Un vrai expert qui comprend les besoins business et les traduit en solutions techniques.",
                project: "Système d'Automation Marketing",
                date: "2024-11"
            },
            {
                id: 3,
                name: "Sarah Johnson",
                title: "Product Manager",
                company: "AfriTech Innovations",
                avatar: "SJ",
                rating: 5,
                content: "Working with Giresse was a game-changer for our fintech project. His blockchain expertise and attention to security details made our wallet app one of the most trusted in the market.",
                project: "Blockchain Wallet Application",
                date: "2024-10"
            },
            {
                id: 4,
                name: "Dr. Emmanuel Kabongo",
                title: "Fondateur",
                company: "HealthTech Africa",
                avatar: "EK",
                rating: 5,
                content: "Giresse a développé notre plateforme de télémédecine avec une approche centrée utilisateur remarquable. Son expertise technique et sa compréhension des enjeux africains sont exceptionnelles.",
                project: "Plateforme de Télémédecine",
                date: "2024-09"
            },
            {
                id: 5,
                name: "Fatima Al-Rashid",
                title: "CTO",
                company: "EduTech MENA",
                avatar: "FAR",
                rating: 5,
                content: "The AI-powered learning platform Giresse built for us has revolutionized online education in our region. His deep understanding of machine learning and user experience is impressive.",
                project: "AI Learning Platform",
                date: "2024-08"
            }
        ];
        this.render();
        this.startAutoRotate();
    }

    render() {
        if (!this.container || !this.testimonials.length) return;

        const testimonialsHTML = `
            <div class="testimonials-carousel">
                <div class="testimonial-slides">
                    ${this.testimonials.map((testimonial, index) => `
                        <div class="testimonial-slide ${index === this.currentSlide ? 'active' : ''}" 
                             data-slide="${index}">
                            <div class="testimonial-content">
                                ${testimonial.content}
                            </div>
                            <div class="testimonial-rating">
                                ${this.renderStars(testimonial.rating)}
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    ${testimonial.avatar}
                                </div>
                                <div class="author-info">
                                    <h4>${testimonial.name}</h4>
                                    <p>${testimonial.title} - ${testimonial.company}</p>
                                    ${testimonial.project ? `<small>Projet: ${testimonial.project}</small>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-controls">
                    <button class="carousel-btn prev-btn" aria-label="Témoignage précédent">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-btn next-btn" aria-label="Témoignage suivant">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="carousel-indicators">
                    ${this.testimonials.map((_, index) => `
                        <button class="indicator ${index === this.currentSlide ? 'active' : ''}" 
                                data-slide="${index}" 
                                aria-label="Aller au témoignage ${index + 1}"></button>
                    `).join('')}
                </div>
            </div>
        `;

        this.container.innerHTML = testimonialsHTML;
        this.attachEventListeners();
    }

    renderStars(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<i class="fas fa-star star ${i <= rating ? '' : 'empty'}"></i>`;
        }
        return starsHTML;
    }

    attachEventListeners() {
        // Navigation buttons
        const prevBtn = this.container.querySelector('.prev-btn');
        const nextBtn = this.container.querySelector('.next-btn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        // Indicators
        const indicators = this.container.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });

        // Pause auto-rotate on hover
        const carousel = this.container.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoRotate());
            carousel.addEventListener('mouseleave', () => this.resumeAutoRotate());
        }

        // Touch/swipe support for mobile
        this.addTouchSupport();
    }

    addTouchSupport() {
        const carousel = this.container.querySelector('.testimonials-carousel');
        if (!carousel) return;

        let startX = 0;
        let startY = 0;
        let isDragging = false;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            this.pauseAutoRotate();
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });

        carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;

            // Only handle horizontal swipes
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }

            isDragging = false;
            this.resumeAutoRotate();
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
        this.updateSlide();
    }

    previousSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
        this.updateSlide();
    }

    goToSlide(index) {
        if (index >= 0 && index < this.testimonials.length) {
            this.currentSlide = index;
            this.updateSlide();
        }
    }

    updateSlide() {
        // Update slide visibility
        const slides = this.container.querySelectorAll('.testimonial-slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // Update indicators
        const indicators = this.container.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        // Add slide transition effect
        const activeSlide = this.container.querySelector('.testimonial-slide.active');
        if (activeSlide) {
            activeSlide.style.opacity = '0';
            activeSlide.style.transform = 'translateY(20px)';

            setTimeout(() => {
                activeSlide.style.opacity = '1';
                activeSlide.style.transform = 'translateY(0)';
            }, 50);
        }
    }

    startAutoRotate() {
        if (this.testimonials.length <= 1) return;

        this.autoRotateInterval = setInterval(() => {
            if (this.isAutoRotating) {
                this.nextSlide();
            }
        }, 5000); // Change slide every 5 seconds
    }

    pauseAutoRotate() {
        this.isAutoRotating = false;
    }

    resumeAutoRotate() {
        this.isAutoRotating = true;
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }

    // Public methods
    refresh() {
        this.stopAutoRotate();
        this.loadTestimonials();
    }

    addTestimonial(testimonial) {
        this.testimonials.push(testimonial);
        this.render();
    }

    destroy() {
        this.stopAutoRotate();
        if (this.container) {
            this.container.innerHTML = '';
        }
    }
}

// Auto-initialize if container exists
document.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.getElementById('testimonials-carousel');
    if (testimonialsContainer) {
        window.testimonialCarousel = new TestimonialCarousel('testimonials-carousel');
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestimonialCarousel;
}