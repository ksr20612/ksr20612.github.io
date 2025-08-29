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

const funConsoleLogs = () => {
    console.log('%c🎉 안녕하세요! 개발자님!', 'color: #FF6B6B; font-size: 25px; font-weight: bold;');
    console.log('%c💡 혹시 이 콘솔을 보고 계시다면 개발자이시거나 개발에 관심이 많으신 분이시겠네요!', 'color: #45B7D1; font-size: 14px;');
    console.log('%c🚀 접근성과 사용자 경험을 중요하게 생각하는 프론트엔드 개발자를 찾고 계시다면 언제든 연락주세요! 명함 챙겨가십쇼. 🙇‍♂️', 'color: #96CEB4; font-size: 14px;');
    
    console.log(`
%c
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║  프론트엔드 개발자 유동연                                         =======  
    ║                                                              ║
    ║  💪 5년 개발 경력 | 구멍가게 오픈소스 관리 | 80만+ 회원 앱 운영       =======
    ║                                                              ║
    ║  🌟 접근성, UX, 사회적 가치에 집중하는 개발자                     =======
    ║                                                              ║
    ║  📞 010-2637-2779 | 📧 ksr20612@gmail.com               =======    
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    `, 'color: #667eea; font-family: monospace; font-size: 12px;');
    
    // 개발자 팁
    console.log('%c💡 키보드로, 스크린리더로 이 페이지를 탐색해 보세요!', 'color: #667eea; font-size: 14px; font-weight: bold;');
    
    // 숨겨진 메시지
    setTimeout(() => {
        console.log('%c🎁 와, 정말 보고 계시는 군요! 꼼꼼하게 봐주셔서 감사합니다. ☺️', 'color: #FFB6C1; font-size: 14px; font-style: italic;');
    }, 5000);
};

document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    funConsoleLogs();
});

window.addEventListener('beforeunload', () => {
    domCache.clear();
}); 