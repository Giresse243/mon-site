class SkillProgress {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.skillsData = null;
        this.activeCategory = 'all';
        this.animatedSkills = new Set();
        
        this.loadSkillsData();
    }

    async loadSkillsData() {
        try {
            const response = await fetch('/assets/data/skills.json');
            this.skillsData = await response.json();
            this.render();
            this.initializeObserver();
        } catch (error) {
            console.error('Error loading skills data:', error);
            this.renderFallbackSkills();
        }
    }

    renderFallbackSkills() {
        // Fallback skills data if JSON file doesn't exist
        this.skillsData = {
            categories: [
                {
                    id: 'frontend',
                    name: 'Frontend',
                    icon: 'fas fa-code',
                    skills: [
                        { name: 'HTML/CSS', proficiency: 95, years: 5, certifications: [] },
                        { name: 'JavaScript', proficiency: 90, years: 5, certifications: [] },
                        { name: 'React', proficiency: 85, years: 3, certifications: [] },
                        { name: 'Vue.js', proficiency: 80, years: 2, certifications: [] }
                    ]
                },
                {
                    id: 'backend',
                    name: 'Backend',
                    icon: 'fas fa-server',
                    skills: [
                        { name: 'Node.js', proficiency: 88, years: 4, certifications: [] },
                        { name: 'Python', proficiency: 92, years: 5, certifications: [] },
                        { name: 'PHP', proficiency: 75, years: 3, certifications: [] },
                        { name: 'PostgreSQL', proficiency: 85, years: 4, certifications: [] }
                    ]
                },
                {
                    id: 'mobile',
                    name: 'Mobile',
                    icon: 'fas fa-mobile-alt',
                    skills: [
                        { name: 'Flutter', proficiency: 90, years: 3, certifications: [] },
                        { name: 'React Native', proficiency: 75, years: 2, certifications: [] },
                        { name: 'Android', proficiency: 70, years: 2, certifications: [] }
                    ]
                },
                {
                    id: 'ai',
                    name: 'AI/ML',
                    icon: 'fas fa-brain',
                    skills: [
                        { name: 'Machine Learning', proficiency: 85, years: 3, certifications: ['Google AI'] },
                        { name: 'TensorFlow', proficiency: 80, years: 2, certifications: [] },
                        { name: 'OpenAI API', proficiency: 90, years: 2, certifications: [] },
                        { name: 'NLP', proficiency: 82, years: 2, certifications: [] }
                    ]
                },
                {
                    id: 'tools',
                    name: 'Outils',
                    icon: 'fas fa-tools',
                    skills: [
                        { name: 'Git', proficiency: 90, years: 5, certifications: [] },
                        { name: 'Docker', proficiency: 75, years: 2, certifications: [] },
                        { name: 'AWS', proficiency: 80, years: 3, certifications: ['AWS Solutions Architect'] },
                        { name: 'Figma', proficiency: 85, years: 3, certifications: [] }
                    ]
                }
            ]
        };
        this.render();
        this.initializeObserver();
    }

    render() {
        if (!this.container || !this.skillsData) return;

        const skillsHTML = `
            <div class="skills-header">
                <h3 class="skills-title">Compétences Techniques</h3>
                <div class="skills-filters">
                    <button class="filter-btn ${this.activeCategory === 'all' ? 'active' : ''}" 
                            data-category="all">Toutes</button>
                    ${this.skillsData.categories.map(category => `
                        <button class="filter-btn ${this.activeCategory === category.id ? 'active' : ''}" 
                                data-category="${category.id}">
                            <i class="${category.icon}"></i>
                            ${category.name}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="skills-content">
                ${this.skillsData.categories.map(category => `
                    <div class="skill-category ${this.activeCategory === 'all' || this.activeCategory === category.id ? 'visible' : 'hidden'}" 
                         data-category="${category.id}">
                        <div class="category-header">
                            <i class="${category.icon}"></i>
                            <h4>${category.name}</h4>
                        </div>
                        <div class="skills-grid">
                            ${category.skills.map((skill, index) => `
                                <div class="skill-item" data-skill="${category.id}-${index}">
                                    <div class="skill-info">
                                        <div class="skill-name-row">
                                            <span class="skill-name">${skill.name}</span>
                                            <span class="skill-percentage">${skill.proficiency}%</span>
                                        </div>
                                        <div class="skill-meta">
                                            <span class="skill-experience">${skill.years} ans d'expérience</span>
                                            ${skill.certifications.length > 0 ? `
                                                <div class="skill-certifications">
                                                    ${skill.certifications.map(cert => `
                                                        <span class="certification-badge">${cert}</span>
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                    <div class="skill-progress-bar">
                                        <div class="skill-progress-fill" 
                                             data-progress="${skill.proficiency}"
                                             style="width: 0%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        this.container.innerHTML = skillsHTML;
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Filter buttons
        const filterButtons = this.container.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.filterByCategory(category);
            });
        });
    }

    filterByCategory(category) {
        this.activeCategory = category;
        
        // Update active filter button
        const filterButtons = this.container.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        // Show/hide categories
        const categories = this.container.querySelectorAll('.skill-category');
        categories.forEach(cat => {
            const shouldShow = category === 'all' || cat.dataset.category === category;
            cat.classList.toggle('visible', shouldShow);
            cat.classList.toggle('hidden', !shouldShow);
        });

        // Re-animate visible skills
        setTimeout(() => {
            this.animateVisibleSkills();
        }, 300);
    }

    initializeObserver() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillProgress(entry.target);
                }
            });
        }, observerOptions);

        // Observe all skill items
        const skillItems = this.container.querySelectorAll('.skill-item');
        skillItems.forEach(item => observer.observe(item));
    }

    animateSkillProgress(skillItem) {
        const skillId = skillItem.dataset.skill;
        if (this.animatedSkills.has(skillId)) return;

        const progressFill = skillItem.querySelector('.skill-progress-fill');
        const targetProgress = parseInt(progressFill.dataset.progress);
        const percentageSpan = skillItem.querySelector('.skill-percentage');

        // Mark as animated
        this.animatedSkills.add(skillId);

        // Animate progress bar
        let currentProgress = 0;
        const duration = 1500; // 1.5 seconds
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            currentProgress = Math.round(targetProgress * easeOut);

            progressFill.style.width = `${currentProgress}%`;
            percentageSpan.textContent = `${currentProgress}%`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

        // Add completion class for additional effects
        setTimeout(() => {
            skillItem.classList.add('animated');
        }, duration);
    }

    animateVisibleSkills() {
        const visibleSkills = this.container.querySelectorAll('.skill-category.visible .skill-item');
        visibleSkills.forEach((skill, index) => {
            setTimeout(() => {
                this.animateSkillProgress(skill);
            }, index * 100); // Stagger animations
        });
    }

    // Public method to refresh skills
    refresh() {
        this.animatedSkills.clear();
        this.loadSkillsData();
    }

    // Public method to add new skill
    addSkill(categoryId, skillData) {
        if (!this.skillsData) return;
        
        const category = this.skillsData.categories.find(cat => cat.id === categoryId);
        if (category) {
            category.skills.push(skillData);
            this.render();
            this.initializeObserver();
        }
    }
}

// Auto-initialize if container exists
document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills-progress-container');
    if (skillsContainer) {
        window.skillProgress = new SkillProgress('skills-progress-container');
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkillProgress;
}