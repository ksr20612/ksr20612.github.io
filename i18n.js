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
    updateHtmlLang();
    updateContent();
    initLanguageToggle();
    // 다크 모드 토글의 aria-label도 다국어로 업데이트
    if (window.darkModeManager) {
        const currentTheme = window.darkModeManager.getCurrentTheme();
        window.darkModeManager.updateToggleButton(currentTheme);
    }
});

function updateContent() {
    requestAnimationFrame(() => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = i18next.t(key);
            
            if (translation.includes('<') && translation.includes('>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });
        updateNavigationVisibility();
    });
}

function changeLanguage(lang) {
    i18next.changeLanguage(lang, () => {
        updateHtmlLang();
        updateContent();
        updateLanguageToggleState();
        // 다크 모드 토글의 aria-label도 다국어로 업데이트
        if (window.darkModeManager) {
            const currentTheme = window.darkModeManager.getCurrentTheme();
            window.darkModeManager.updateToggleButton(currentTheme);
        }
    });
}

function updateHtmlLang() {
    const currentLang = i18next.language;
    document.documentElement.lang = currentLang;
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
        
        // i18next를 사용하여 다국어 지원
        const toggleKey = isEnglish ? 'language.switchToKorean' : 'language.switchToEnglish';
        const translatedLabel = i18next.t('language.toggle');
        const translatedTarget = i18next.t(toggleKey);
        
        // 현재 언어와 전환할 언어를 명확히 표시
        const currentLanguage = isEnglish ? 'English' : 'Korean';
        const ariaLabel = `${translatedLabel}: ${currentLanguage}, ${translatedTarget}`;
        
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
            // 영어일 때 네비게이션 완전히 숨김
            navigationMenu.style.display = 'none';
        } else {
            // 한국어일 때는 화면 크기에 따라 처리
            if (window.innerWidth >= 820) {
                // 중간 크기 이상(md)에서는 표시
                navigationMenu.style.display = 'flex';
            } else {
                // 작은 화면에서는 숨김
                navigationMenu.style.display = 'none';
            }
        }
    }
}

// 화면 크기 변경 시 네비게이션 메뉴 표시 상태 업데이트
function handleResize() {
    updateNavigationVisibility();
}

// 리사이즈 이벤트 리스너 등록
window.addEventListener('resize', handleResize);