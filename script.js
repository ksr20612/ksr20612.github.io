const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const domCache = {
    sections: null,
    navLinks: null,
    anchors: null,
    header: null,
    skipLinks: null,
    getSections() {
        if (!this.sections) {
            this.sections = document.querySelectorAll('section[id]');
        }
        return this.sections;
    },
    getNavLinks() {
        if (!this.navLinks) {
            this.navLinks = document.querySelectorAll('nav a[href^="#"]');
        }
        return this.navLinks;
    },
    getAnchors() {
        if (!this.anchors) {
            this.anchors = document.querySelectorAll('a[href^="#"]');
        }
        return this.anchors;
    },
    getSkipLinks() {
        if (!this.skipLinks) {
            this.skipLinks = document.querySelectorAll('.visually-hidden[href^="#"]');
        }
        return this.skipLinks;
    },
    getHeader() {
        if(!this.header) {
            this.header = document.querySelector('header');
        }
        return this.header;
    },
    clear() {
        this.sections = null;
        this.navLinks = null;
        this.anchors = null;
        this.skipLinks = null;
    }
};

const updateActiveNavLink = (current) => {
    const navLinks = domCache.getNavLinks();
    
    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-primary');
        }
    });
};

const handleScroll = throttle(() => {
    const sections = domCache.getSections();
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const isAtBottom = scrollPosition + windowHeight >= documentHeight - 100;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    if (isAtBottom && sections.length > 0) {
        current = sections[sections.length - 1].getAttribute('id');
    }

    updateActiveNavLink(current);
}, 100);

const scrollToSection = (target, isSkipLink = false) => {
    if (target) {
        const headerHeight = domCache.getHeader()?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        if (isSkipLink) {
            setTimeout(() => {
                const sectionLink = target.querySelector('.section-link');
                if (sectionLink) {
                    sectionLink.focus();
                }
            }, 500);
        }
    }
};

const initPortfolio = () => {
    const anchors = domCache.getAnchors();
    const skipLinks = domCache.getSkipLinks();
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                scrollToSection(target, false);
            }
        });
    });

    skipLinks.forEach(skipLink => {
        skipLink.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                scrollToSection(target, true);
            }
        });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
};

document.addEventListener('DOMContentLoaded', initPortfolio);

window.addEventListener('beforeunload', () => {
    domCache.clear();
}); 