i18next
.use(i18nextHttpBackend)
.init({
  lng: 'ko',
  debug: true,
  fallbackLng: 'ko',
  backend: {
    loadPath: '/locales/{{lng}}.json'
  }
}, function(err, t) {
    if(err) console.error(err);
    updateContent();
    initLanguageToggle();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = i18next.t(key);
        
        // HTML 태그가 포함된 경우 innerHTML 사용, 그렇지 않으면 textContent 사용
        if (translation.includes('<') && translation.includes('>')) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });
    updateNavigationVisibility();
}

function changeLanguage(lang) {
    i18next.changeLanguage(lang, () => {
        updateContent();
        updateLanguageToggleState();
    });
}

function initLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        // 초기 aria-pressed 상태 설정
        updateLanguageToggleState();
        
        languageToggle.addEventListener('click', () => {
            const currentLang = i18next.language;
            const newLang = currentLang === 'ko' ? 'en' : 'ko';
            changeLanguage(newLang);
        });
    }
}

function updateLanguageToggleState() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        const currentLang = i18next.language;
        const isEnglish = currentLang === 'en';
        
        // 현재 언어와 전환할 언어를 명확히 표시
        const currentLanguage = isEnglish ? 'English' : 'Korean';
        const targetLanguage = isEnglish ? 'Korean' : 'English';
        const ariaLabel = `현재 언어: ${currentLanguage}, ${targetLanguage}로 전환`;
        
        languageToggle.setAttribute('aria-label', ariaLabel);
        languageToggle.setAttribute('title', ariaLabel);
    }
}

function updateNavigationVisibility() {
    const navigationMenu = document.getElementById('navigation-menu');
    if (navigationMenu) {
        const currentLang = i18next.language;
        const isEnglish = currentLang === 'en';
        
        if (isEnglish) {
            // 영어일 때 네비게이션 숨김
            navigationMenu.style.display = 'none';
        } else {
            // 한국어일 때 네비게이션 표시
            navigationMenu.style.display = 'flex';
        }
    }
}