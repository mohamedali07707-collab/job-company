/* ==========================================================================
   Safe Job - وظيفة آمنة | Main JavaScript
   ========================================================================== */

/* ========================================
   English: Language Toggle Functionality
   Arabic: وظيفة تبديل اللغة
   ======================================== */

/**
 * languageToggle - Toggles between English and Arabic languages
 * يبدل بين اللغة الإنجليزية والعربية
 * @param {string} lang - Language code ('en' or 'ar')
 */
function languageToggle(lang) {
    // Save preference to localStorage
    localStorage.setItem('sj-language', lang);
    
    // Get HTML element
    const html = document.documentElement;
    
    if (lang === 'ar') {
        // Set Arabic direction
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        
        // Update language toggle button text
        const langBtn = document.getElementById('sj-lang-toggle');
        if (langBtn) {
            langBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                EN
            `;
            langBtn.setAttribute('aria-label', 'Switch to English');
        }
        
        // Update navigation links
        updateNavLinks('ar');
        
        // Update hero content
        updateHeroContent('ar');
        
        // Update footer content
        updateFooterContent('ar');
        
        // Update cards content
        updateCardsContent('ar');
        
        // Update features content
        updateFeaturesContent('ar');
        
        // Update CTA content
        updateCTAContent('ar');
        
        // Update about content
        updateAboutContent('ar');
        
        // Update services content
        updateServicesContent('ar');
    } else {
        // Set English direction
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        
        // Update language toggle button text
        const langBtn = document.getElementById('sj-lang-toggle');
        if (langBtn) {
            langBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                AR
            `;
            langBtn.setAttribute('aria-label', 'Switch to Arabic');
        }
        
        // Update navigation links
        updateNavLinks('en');
        
        // Update hero content
        updateHeroContent('en');
        
        // Update footer content
        updateFooterContent('en');
        
        // Update cards content
        updateCardsContent('en');
        
        // Update features content
        updateFeaturesContent('en');
        
        // Update CTA content
        updateCTAContent('en');
        
        // Update about content
        updateAboutContent('en');
        
        // Update services content
        updateServicesContent('en');
    }
    
    // Dispatch event for other components
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * updateNavLinks - Updates navigation links text based on language
 * Arabic: تحديث نصوص روابط التنقل بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateNavLinks(lang) {
    const navLinks = document.querySelectorAll('[data-nav-en], [data-nav-ar]');
    navLinks.forEach(link => {
        if (lang === 'ar') {
            link.textContent = link.getAttribute('data-nav-ar');
            link.href = link.getAttribute('data-href-ar') || link.getAttribute('href');
        } else {
            link.textContent = link.getAttribute('data-nav-en');
            link.href = link.getAttribute('data-href-en') || link.getAttribute('href');
        }
    });
}

/**
 * updateHeroContent - Updates hero section content based on language
 * Arabic: تحديث محتوى قسم الرئيسية بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateHeroContent(lang) {
    const heroTitle = document.querySelector('[data-hero-title-en]');
    const heroSubtitle = document.querySelector('[data-hero-subtitle-en]');
    const heroCta = document.querySelector('[data-hero-cta-en]');
    
    if (heroTitle) {
        heroTitle.textContent = lang === 'ar' 
            ? heroTitle.getAttribute('data-hero-title-ar') 
            : heroTitle.getAttribute('data-hero-title-en');
    }
    
    if (heroSubtitle) {
        heroSubtitle.textContent = lang === 'ar' 
            ? heroSubtitle.getAttribute('data-hero-subtitle-ar') 
            : heroSubtitle.getAttribute('data-hero-subtitle-en');
    }
    
    if (heroCta) {
        heroCta.textContent = lang === 'ar' 
            ? heroCta.getAttribute('data-hero-cta-ar') 
            : heroCta.getAttribute('data-hero-cta-en');
    }
}

/**
 * updateFooterContent - Updates footer content based on language
 * Arabic: تحديث محتوى التذييل بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateFooterContent(lang) {
    const quickLinks = document.querySelectorAll('[data-footer-link-en]');
    quickLinks.forEach(link => {
        const enText = link.getAttribute('data-footer-link-en');
        const arText = link.getAttribute('data-footer-link-ar');
        link.textContent = lang === 'ar' ? arText : enText;
    });
}

/**
 * updateCardsContent - Updates card content (titles, text, links) based on language
 * Arabic: تحديث محتوى البطاقات بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateCardsContent(lang) {
    // Update card titles
    const cardTitles = document.querySelectorAll('[data-card-title-en]');
    cardTitles.forEach(title => {
        title.textContent = lang === 'ar' 
            ? title.getAttribute('data-card-title-ar') 
            : title.getAttribute('data-card-title-en');
    });
    
    // Update card text
    const cardTexts = document.querySelectorAll('[data-card-text-en]');
    cardTexts.forEach(text => {
        text.textContent = lang === 'ar' 
            ? text.getAttribute('data-card-text-ar') 
            : text.getAttribute('data-card-text-en');
    });
    
    // Update card links
    const cardLinks = document.querySelectorAll('[data-card-link-en]');
    cardLinks.forEach(link => {
        link.textContent = lang === 'ar' 
            ? link.getAttribute('data-card-link-ar') 
            : link.getAttribute('data-card-link-en');
    });
}

/**
 * updateFeaturesContent - Updates features section content based on language
 * Arabic: تحديث محتوى قسم المميزات بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateFeaturesContent(lang) {
    // Update section title
    const featuresTitle = document.querySelector('[data-features-title-en]');
    if (featuresTitle) {
        featuresTitle.textContent = lang === 'ar' 
            ? featuresTitle.getAttribute('data-features-title-ar') 
            : featuresTitle.getAttribute('data-features-title-en');
    }
    
    // Update section subtitle
    const featuresSubtitle = document.querySelector('[data-features-subtitle-en]');
    if (featuresSubtitle) {
        featuresSubtitle.textContent = lang === 'ar' 
            ? featuresSubtitle.getAttribute('data-features-subtitle-ar') 
            : featuresSubtitle.getAttribute('data-features-subtitle-en');
    }
    
    // Update feature titles
    const feature1 = document.querySelector('[data-feature-1-en]');
    if (feature1) {
        feature1.textContent = lang === 'ar' 
            ? feature1.getAttribute('data-feature-1-ar') 
            : feature1.getAttribute('data-feature-1-en');
    }
    
    const feature2 = document.querySelector('[data-feature-2-en]');
    if (feature2) {
        feature2.textContent = lang === 'ar' 
            ? feature2.getAttribute('data-feature-2-ar') 
            : feature2.getAttribute('data-feature-2-en');
    }
    
    const feature3 = document.querySelector('[data-feature-3-en]');
    if (feature3) {
        feature3.textContent = lang === 'ar' 
            ? feature3.getAttribute('data-feature-3-ar') 
            : feature3.getAttribute('data-feature-3-en');
    }
    
    const feature4 = document.querySelector('[data-feature-4-en]');
    if (feature4) {
        feature4.textContent = lang === 'ar' 
            ? feature4.getAttribute('data-feature-4-ar') 
            : feature4.getAttribute('data-feature-4-en');
    }
    
    // Update feature descriptions
    const feature1Desc = document.querySelector('[data-feature-1-desc-en]');
    if (feature1Desc) {
        feature1Desc.textContent = lang === 'ar' 
            ? feature1Desc.getAttribute('data-feature-1-desc-ar') 
            : feature1Desc.getAttribute('data-feature-1-desc-en');
    }
    
    const feature2Desc = document.querySelector('[data-feature-2-desc-en]');
    if (feature2Desc) {
        feature2Desc.textContent = lang === 'ar' 
            ? feature2Desc.getAttribute('data-feature-2-desc-ar') 
            : feature2Desc.getAttribute('data-feature-2-desc-en');
    }
    
    const feature3Desc = document.querySelector('[data-feature-3-desc-en]');
    if (feature3Desc) {
        feature3Desc.textContent = lang === 'ar' 
            ? feature3Desc.getAttribute('data-feature-3-desc-ar') 
            : feature3Desc.getAttribute('data-feature-3-desc-en');
    }
    
    const feature4Desc = document.querySelector('[data-feature-4-desc-en]');
    if (feature4Desc) {
        feature4Desc.textContent = lang === 'ar' 
            ? feature4Desc.getAttribute('data-feature-4-desc-ar') 
            : feature4Desc.getAttribute('data-feature-4-desc-en');
    }
}

/**
 * updateCTAContent - Updates CTA section content based on language
 * Arabic: تحديث محتوى قسم الدعوة للعمل بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateCTAContent(lang) {
    // Update CTA title
    const ctaTitle = document.querySelector('[data-cta-title-en]');
    if (ctaTitle) {
        ctaTitle.textContent = lang === 'ar' 
            ? ctaTitle.getAttribute('data-cta-title-ar') 
            : ctaTitle.getAttribute('data-cta-title-en');
    }
    
    // Update CTA text
    const ctaText = document.querySelector('[data-cta-text-en]');
    if (ctaText) {
        ctaText.textContent = lang === 'ar' 
            ? ctaText.getAttribute('data-cta-text-ar') 
            : ctaText.getAttribute('data-cta-text-en');
    }
    
    // Update CTA button 1
    const ctaBtn1 = document.querySelector('[data-cta-btn1-en]');
    if (ctaBtn1) {
        ctaBtn1.textContent = lang === 'ar' 
            ? ctaBtn1.getAttribute('data-cta-btn1-ar') 
            : ctaBtn1.getAttribute('data-cta-btn1-en');
    }
    
    // Update CTA button 2
    const ctaBtn2 = document.querySelector('[data-cta-btn2-en]');
    if (ctaBtn2) {
        ctaBtn2.textContent = lang === 'ar' 
            ? ctaBtn2.getAttribute('data-cta-btn2-ar') 
            : ctaBtn2.getAttribute('data-cta-btn2-en');
    }
}

/**
 * updateAboutContent - Updates about page content based on language
 * Arabic: تحديث محتوى صفحة من نحن بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateAboutContent(lang) {
    // Update about title
    const aboutTitle = document.querySelector('[data-about-title-en]');
    if (aboutTitle) {
        aboutTitle.textContent = lang === 'ar' 
            ? aboutTitle.getAttribute('data-about-title-ar') 
            : aboutTitle.getAttribute('data-about-title-en');
    }
    
    // Update about subtitle
    const aboutSubtitle = document.querySelector('[data-about-subtitle-en]');
    if (aboutSubtitle) {
        aboutSubtitle.textContent = lang === 'ar' 
            ? aboutSubtitle.getAttribute('data-about-subtitle-ar') 
            : aboutSubtitle.getAttribute('data-about-subtitle-en');
    }
    
    // Update story title
    const storyTitle = document.querySelector('[data-story-title-en]');
    if (storyTitle) {
        storyTitle.textContent = lang === 'ar' 
            ? storyTitle.getAttribute('data-story-title-ar') 
            : storyTitle.getAttribute('data-story-title-en');
    }
    
    // Update story texts
    const storyText1 = document.querySelector('[data-story-text1-en]');
    if (storyText1) {
        storyText1.textContent = lang === 'ar' 
            ? storyText1.getAttribute('data-story-text1-ar') 
            : storyText1.getAttribute('data-story-text1-en');
    }
    
    const storyText2 = document.querySelector('[data-story-text2-en]');
    if (storyText2) {
        storyText2.textContent = lang === 'ar' 
            ? storyText2.getAttribute('data-story-text2-ar') 
            : storyText2.getAttribute('data-story-text2-en');
    }
    
    const storyText3 = document.querySelector('[data-story-text3-en]');
    if (storyText3) {
        storyText3.textContent = lang === 'ar' 
            ? storyText3.getAttribute('data-story-text3-ar') 
            : storyText3.getAttribute('data-story-text3-en');
    }
    
    // Update mission
    const mission = document.querySelector('[data-mission-en]');
    if (mission) {
        mission.textContent = lang === 'ar' 
            ? mission.getAttribute('data-mission-ar') 
            : mission.getAttribute('data-mission-en');
    }
    
    // Update vision
    const vision = document.querySelector('[data-vision-en]');
    if (vision) {
        vision.textContent = lang === 'ar' 
            ? vision.getAttribute('data-vision-ar') 
            : vision.getAttribute('data-vision-en');
    }
    
    // Update values
    const values = document.querySelector('[data-values-en]');
    if (values) {
        values.textContent = lang === 'ar' 
            ? values.getAttribute('data-values-ar') 
            : values.getAttribute('data-values-en');
    }
}

/**
 * updateServicesContent - Updates services page content based on language
 * Arabic: تحديث محتوى صفحة الخدمات بناءً على اللغة
 * @param {string} lang - Language code
 */
function updateServicesContent(lang) {
    // Update services title
    const servicesTitle = document.querySelector('[data-services-title-en]');
    if (servicesTitle) {
        servicesTitle.textContent = lang === 'ar' 
            ? servicesTitle.getAttribute('data-services-title-ar') 
            : servicesTitle.getAttribute('data-services-title-en');
    }
    
    // Update services subtitle
    const servicesSubtitle = document.querySelector('[data-services-subtitle-en]');
    if (servicesSubtitle) {
        servicesSubtitle.textContent = lang === 'ar' 
            ? servicesSubtitle.getAttribute('data-services-subtitle-ar') 
            : servicesSubtitle.getAttribute('data-services-subtitle-en');
    }
    
    // Update filter buttons
    const filterBtns = document.querySelectorAll('.sj-filter-btn');
    filterBtns.forEach(btn => {
        const enText = btn.getAttribute('data-filter-en');
        const arText = btn.getAttribute('data-filter-ar');
        if (enText && arText) {
            btn.textContent = lang === 'ar' ? arText : enText;
        }
    });
    
    // Update service titles
    for (let i = 1; i <= 6; i++) {
        const title = document.querySelector(`[data-service-title-${i}-en]`);
        if (title) {
            title.textContent = lang === 'ar' 
                ? title.getAttribute(`data-service-title-${i}-ar`) 
                : title.getAttribute(`data-service-title-${i}-en`);
        }
        
        const text = document.querySelector(`[data-service-text-${i}-en]`);
        if (text) {
            text.textContent = lang === 'ar' 
                ? text.getAttribute(`data-service-text-${i}-ar`) 
                : text.getAttribute(`data-service-text-${i}-en`);
        }
    }
    
    // Update learn more buttons
    const learnMoreBtns = document.querySelectorAll('[data-learn-more-en]');
    learnMoreBtns.forEach(btn => {
        const enText = btn.getAttribute('data-learn-more-en');
        const arText = btn.getAttribute('data-learn-more-ar');
        btn.textContent = lang === 'ar' ? arText : enText;
    });
}

/**
 * initLanguage - Initializes language based on saved preference
 * Arabic: تهيئة اللغة بناءً على التفضيل المحفوظ
 */
function initLanguage() {
    const savedLang = localStorage.getItem('sj-language') || 'en';
    languageToggle(savedLang);
}

/* ========================================
   English: Hero Carousel Functionality
   Arabic: وظيفة دوار الشرائح الرئيسي
   ======================================== */

/**
 * Carousel class - Manages hero image carousel
 * Arabic: فئة لإدارة دوار صور الرئيسية
 */
class HeroCarousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.sj-hero__slide');
        this.dots = container.querySelectorAll('.sj-hero__dot');
        this.prevBtn = container.querySelector('.sj-hero__arrow--prev');
        this.nextBtn = container.querySelector('.sj-hero__arrow--next');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;
        
        this.init();
    }
    
    /**
     * init - Initialize carousel
     * Arabic: تهيئة الدوار
     */
    init() {
        // Add event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Add dot click handlers
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Start autoplay
        this.startAutoplay();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Set initial state
        this.updateSlides();
    }
    
    /**
     * goTo - Navigate to specific slide
     * Arabic: الانتقال إلى شريحة معينة
     * @param {number} index - Slide index
     */
    goTo(index) {
        this.currentIndex = index;
        this.updateSlides();
        this.resetAutoplay();
    }
    
    /**
     * next - Navigate to next slide
     * Arabic: الانتقال إلى الشريحة التالية
     */
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlides();
        this.resetAutoplay();
    }
    
    /**
     * prev - Navigate to previous slide
     * Arabic: الانتقال إلى الشريحة السابقة
     */
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
        this.resetAutoplay();
    }
    
    /**
     * updateSlides - Update slide visibility and dots
     * Arabic: تحديث رؤية الشرائح والنقاط
     */
    updateSlides() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('sj-hero__slide--active', index === this.currentIndex);
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('sj-hero__dot--active', index === this.currentIndex);
            dot.setAttribute('aria-current', index === this.currentIndex ? 'true' : 'false');
        });
    }
    
    /**
     * startAutoplay - Start automatic slide transition
     * Arabic: بدء الانتقال التلقائي للشرائح
     */
    startAutoplay() {
        if (!this.autoplayInterval) {
            this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
        }
    }
    
    /**
     * stopAutoplay - Stop automatic slide transition
     * Arabic: إيقاف الانتقال التلقائي للشرائح
     */
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    /**
     * resetAutoplay - Reset autoplay timer
     * Arabic: إعادة تعيين مؤقت التشغيل التلقائي
     */
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

/* ========================================
   English: Mobile Navigation
   Arabic: التنقل على الجوال
   ======================================== */

/**
 * initMobileNav - Initialize mobile navigation toggle
 * Arabic: تهيئة تبديل التنقل على الجوال
 */
function initMobileNav() {
    const menuToggle = document.getElementById('sj-menu-toggle');
    const navList = document.getElementById('sj-nav-list');
    
    if (!menuToggle || !navList) return;
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Toggle aria-expanded
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle nav list visibility
        navList.classList.toggle('sj-nav__list--open');
        
        // Trap focus in mobile menu when opened
        if (!isExpanded) {
            const firstLink = navList.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
    
    // Close menu on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('sj-nav__list--open')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('sj-nav__list--open');
            menuToggle.focus();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('sj-nav__list--open');
        }
    });
}

/* ========================================
   English: Contact Form Handling
   Arabic: معالجة نموذج الاتصال
   ======================================== */

/**
 * validateEmail - Validates email format
 * Arabic: التحقق من صحة تنسيق البريد الإلكتروني
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * showFormMessage - Shows form success/error message
 * Arabic: عرض رسالة نجاح/خطأ النموذج
 * @param {string} type - Message type ('success' or 'error')
 * @param {string} message - Message text
 */
function showFormMessage(type, message) {
    const form = document.getElementById('sj-contact-form');
    if (!form) return;
    
    const successMsg = form.querySelector('.sj-form__success');
    const errorMsg = form.querySelector('.sj-form__error');
    
    if (type === 'success') {
        if (successMsg) {
            successMsg.textContent = message;
            successMsg.classList.add('sj-form__success--visible');
            successMsg.setAttribute('aria-live', 'polite');
        }
        if (errorMsg) {
            errorMsg.classList.remove('sj-form__error--visible');
        }
    } else {
        if (errorMsg) {
            errorMsg.textContent = message;
            errorMsg.classList.add('sj-form__error--visible');
            errorMsg.setAttribute('aria-live', 'assertive');
        }
        if (successMsg) {
            successMsg.classList.remove('sj-form__success--visible');
        }
    }
}

/**
 * validateContactForm - Validates contact form fields
 * Arabic: التحقق من صحة حقول نموذج الاتصال
 * @returns {boolean} - True if form is valid
 */
function validateContactForm() {
    const form = document.getElementById('sj-contact-form');
    if (!form) return false;
    
    const name = document.getElementById('sj-name');
    const email = document.getElementById('sj-email');
    const subject = document.getElementById('sj-subject');
    const message = document.getElementById('sj-message');
    
    let isValid = true;
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    
    // Validate name
    if (name && !name.value.trim()) {
        name.classList.add('sj-form__input--error');
        isValid = false;
    } else if (name) {
        name.classList.remove('sj-form__input--error');
    }
    
    // Validate email
    if (email && !validateEmail(email.value)) {
        email.classList.add('sj-form__input--error');
        isValid = false;
    } else if (email) {
        email.classList.remove('sj-form__input--error');
    }
    
    // Validate subject
    if (subject && !subject.value.trim()) {
        subject.classList.add('sj-form__input--error');
        isValid = false;
    } else if (subject) {
        subject.classList.remove('sj-form__input--error');
    }
    
    // Validate message (minimum 10 characters)
    if (message && message.value.trim().length < 10) {
        message.classList.add('sj-form__textarea--error');
        isValid = false;
    } else if (message) {
        message.classList.remove('sj-form__textarea--error');
    }
    
    // Show error messages
    if (!isValid) {
        const errorMsg = currentLang === 'ar' 
            ? 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح' 
            : 'Please fill in all required fields correctly';
        showFormMessage('error', errorMsg);
    }
    
    return isValid;
}

/**
 * handleFormSubmit - Handles form submission
 * Arabic: معالجة تقديم النموذج
 * @param {Event} e - Form submit event
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateContactForm()) return;
    
    const form = e.target;
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    
    try {
        // Get form data
        const formData = new FormData(form);
        
        // Submit to Formspree
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            const successMsg = currentLang === 'ar'
                ? 'شكراً لك! تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريباً.'
                : 'Thank you! Your message has been sent successfully. We will get back to you soon.';
            
            showFormMessage('success', successMsg);
            
            // Reset form
            form.reset();
        } else {
            // If Formspree returns error, fallback to mailto
            throw new Error('Formspree error - using fallback');
        }
    } catch (error) {
        // Fallback: Open email client with pre-filled message
        const name = document.getElementById('sj-name').value;
        const email = document.getElementById('sj-email').value;
        const subject = document.getElementById('sj-subject').value;
        const message = document.getElementById('sj-message').value;
        
        const mailtoLink = `mailto:mohamedali0773955@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        const successMsg = currentLang === 'ar'
            ? 'سيتم فتح برنامج البريد الإلكتروني لإرسال رسالتك.'
            : 'Your email client will open to send the message.';
        
        showFormMessage('success', successMsg);
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        
        // Remove error states
        const inputs = form.querySelectorAll('.sj-form__input, .sj-form__textarea');
        inputs.forEach(input => {
            input.classList.remove('sj-form__input--error', 'sj-form__textarea--error');
        });
    }
}

/**
 * initContactForm - Initialize contact form
 * Arabic: تهيئة نموذج الاتصال
 */
function initContactForm() {
    const form = document.getElementById('sj-contact-form');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = form.querySelectorAll('.sj-form__input, .sj-form__textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.id === 'sj-email' && input.value) {
                if (!validateEmail(input.value)) {
                    input.classList.add('sj-form__input--error');
                } else {
                    input.classList.remove('sj-form__input--error');
                }
            } else if (input.value) {
                input.classList.remove('sj-form__input--error', 'sj-form__textarea--error');
            }
        });
        
        // Remove error on input
        input.addEventListener('input', () => {
            input.classList.remove('sj-form__input--error', 'sj-form__textarea--error');
        });
    });
}

/* ========================================
   English: Services Filter
   Arabic: فلتر الخدمات
   ======================================== */

/**
 * filterServices - Filter services by category
 * Arabic: فلترة الخدمات حسب الفئة
 * @param {string} category - Category to filter ('all', 'law', 'recruitment')
 */
function filterServices(category) {
    const serviceCards = document.querySelectorAll('.sj-service-card');
    const filterBtns = document.querySelectorAll('.sj-filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('sj-filter-btn--active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('sj-filter-btn--active');
        }
    });
    
    // Filter cards
    serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('sj-service-card--hidden');
            // Add animation
            card.style.animation = 'sj-fadeInUp 0.5s ease forwards';
        } else {
            card.classList.add('sj-service-card--hidden');
        }
    });
}

/**
 * initServicesFilter - Initialize services filter
 * Arabic: تهيئة فلتر الخدمات
 */
function initServicesFilter() {
    const filterBtns = document.querySelectorAll('.sj-filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            filterServices(category);
        });
    });
}

/* ========================================
   English: Modal Functionality
   Arabic: وظيفة النافذة المنبثقة
   ======================================== */

/**
 * openModal - Opens modal dialog
 * Arabic: فتح النافذة المنبثقة
 * @param {string} modalId - Modal element ID
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.add('sj-modal--visible');
    modal.setAttribute('aria-hidden', 'false');
    
    // Trap focus inside modal
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modal._firstFocus = firstElement;
    modal._lastFocus = lastElement;
    
    // Focus first element
    if (firstElement) firstElement.focus();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

/**
 * closeModal - Closes modal dialog
 * Arabic: إغلاق النافذة المنبثقة
 * @param {string} modalId - Modal element ID
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.remove('sj-modal--visible');
    modal.setAttribute('aria-hidden', 'true');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to trigger element
    if (modal._trigger) {
        modal._trigger.focus();
    }
}

/**
 * initModals - Initialize modal functionality
 * Arabic: تهيئة وظيفة النافذة المنبثقة
 */
function initModals() {
    // Close buttons
    document.querySelectorAll('.sj-modal__close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.sj-modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Close on backdrop click
    document.querySelectorAll('.sj-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const visibleModal = document.querySelector('.sj-modal--visible');
            if (visibleModal) {
                closeModal(visibleModal.id);
            }
        }
    });
    
    // Service detail triggers
    document.querySelectorAll('[data-service-detail]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-service-detail');
            btn._modalTrigger = btn;
            openModal(modalId);
        });
    });
}

/* ========================================
   English: Animation Toggle
   Arabic: تبديل التحريكات
   ======================================== */

/**
 * toggleAnimations - Toggle animations on/off
 * Arabic: تشغيل/إيقاف التحريكات
 */
function toggleAnimations() {
    const html = document.documentElement;
    const isDisabled = html.classList.contains('sj-animations-disabled');
    
    if (isDisabled) {
        html.classList.remove('sj-animations-disabled');
        localStorage.setItem('sj-animations', 'enabled');
        updateAnimationToggleUI(false);
    } else {
        html.classList.add('sj-animations-disabled');
        localStorage.setItem('sj-animations', 'disabled');
        updateAnimationToggleUI(true);
    }
}

/**
 * updateAnimationToggleUI - Update animation toggle button
 * Arabic: تحديث زر تبديل التحريكات
 * @param {boolean} isDisabled - Whether animations are disabled
 */
function updateAnimationToggleUI(isDisabled) {
    const toggle = document.getElementById('sj-animation-toggle');
    if (!toggle) return;
    
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    
    if (isDisabled) {
        toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
            ${currentLang === 'ar' ? 'تشغيل التحريكات' : 'Enable Animations'}
        `;
    } else {
        toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
            ${currentLang === 'ar' ? 'إيقاف التحريكات' : 'Disable Animations'}
        `;
    }
}

/**
 * initAnimationToggle - Initialize animation toggle
 * Arabic: تهيئة تبديل التحريكات
 */
function initAnimationToggle() {
    const toggle = document.getElementById('sj-animation-toggle');
    if (!toggle) return;
    
    // Check saved preference
    const savedPref = localStorage.getItem('sj-animations');
    const html = document.documentElement;
    
    if (savedPref === 'disabled') {
        html.classList.add('sj-animations-disabled');
        updateAnimationToggleUI(true);
    } else {
        updateAnimationToggleUI(false);
    }
    
    // Add click handler
    toggle.addEventListener('click', toggleAnimations);
}

/* ========================================
   English: Scroll Animations
   Arabic: تحريكات التمرير
   ======================================== */

/**
 * initScrollAnimations - Initialize scroll-triggered animations
 * Arabic: تهيئة تحريكات التمرير
 */
function initScrollAnimations() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    // Check if animations are disabled
    if (document.documentElement.classList.contains('sj-animations-disabled')) {
        return;
    }
    
    const animatedElements = document.querySelectorAll('.sj-animate-on-scroll');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('sj-animate-on-scroll--visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

/* ========================================
   English: WhatsApp Link Handler
   Arabic: معالج رابط واتساب
   ======================================== */

/**
 * initWhatsAppLinks - Initialize WhatsApp links with pre-filled messages
 * Arabic: تهيئة روابط واتساب مع رسائل محددة مسبقاً
 */
function initWhatsAppLinks() {
    const waLinks = document.querySelectorAll('[data-whatsapp]');
    const phoneNumber = '9647765722688';
    
    waLinks.forEach(link => {
        const messageType = link.getAttribute('data-whatsapp');
        let message = '';
        
        // Get current language
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        
        if (messageType === 'contact') {
            message = currentLang === 'ar'
                ? 'مرحبًا، أود الاستفسار عن خدمات وظيفة آمنة'
                : 'Hello, I\'m interested in Safe Job services.';
        }
        
        // Set href with pre-filled message
        const encodedMessage = encodeURIComponent(message);
        link.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    });
}

/* ========================================
   English: Active Nav Link
   Arabic: رابط التنقل النشط
   ======================================== */

/**
 * setActiveNavLink - Set active state on current page nav link
 * Arabic: تعيين الحالة النشطة على رابط تنقل الصفحة الحالية
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sj-nav__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('sj-nav__link--active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('sj-nav__link--active');
            link.removeAttribute('aria-current');
        }
    });
}

/* ========================================
   English: Initialize All
   Arabic: تهيئة الكل
   ======================================== */

/**
 * DOMContentLoaded event handler
 * Arabic: معالج حدث تحميل DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initLanguage();
    
    // Language toggle button
    const langToggle = document.getElementById('sj-lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = document.documentElement.getAttribute('lang');
            languageToggle(currentLang === 'ar' ? 'en' : 'ar');
        });
    }
    
    // Initialize hero carousel
    const heroCarousel = document.querySelector('.sj-hero__carousel');
    if (heroCarousel) {
        new HeroCarousel(heroCarousel);
    }
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize services filter
    initServicesFilter();
    
    // Initialize modals
    initModals();
    
    // Initialize animation toggle
    initAnimationToggle();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize WhatsApp links
    initWhatsAppLinks();
    
    // Set active nav link
    setActiveNavLink();
});

/* ========================================
   English: Handle language changes for form messages
   Arabic: معالجة تغييرات لغة رسائل النموذج
   ======================================== */

document.addEventListener('languageChanged', function(e) {
    // Update form placeholders and messages if needed
    const currentLang = e.detail.lang;
    
    // Update WhatsApp links
    initWhatsAppLinks();
});

