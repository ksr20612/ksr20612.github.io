# AGENTS.md

This file contains guidelines and commands for agentic coding agents working on this portfolio website repository.

## Project Overview

This is a static GitHub Pages portfolio website for DongYeon Yu (유동연), a frontend developer focused on accessibility, human-centered design, and social impact. The site is built with vanilla HTML, CSS, and JavaScript, using Tailwind CSS for styling and i18next for internationalization (Korean/English).

## Development Commands

Since this is a static site without a build system, there are no traditional build/lint/test commands. However, here are the recommended workflows:

### Local Development
```bash
# Serve the site locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
live-server
```

### Validation
```bash
# HTML validation
npx html-validate index.html

# Accessibility audit
npx pa11y index.html

# Link checking
npx markdown-link-check README.md
```

### Deployment
```bash
# Deploy to GitHub Pages (automatic on push to main)
git push origin main
```

## Code Style Guidelines

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, etc.)
- Follow proper heading hierarchy (`h1` → `h2` → `h3`)
- Include proper ARIA labels and roles for accessibility
- Use `data-i18n` attributes for all translatable content
- Structure sections with proper IDs for navigation anchoring

### CSS/Styling
- Use Tailwind CSS utility classes primarily
- Custom CSS should be minimal and placed in `<style>` tag in `<head>`
- Follow mobile-first responsive design with Tailwind breakpoints
- Use CSS custom properties for theme colors (defined in Tailwind config)
- Implement smooth transitions for theme changes and interactions
- Ensure proper contrast ratios for accessibility

### JavaScript Patterns
- Use ES6+ features consistently
- Organize code into logical classes and modules
- Use `requestAnimationFrame` for DOM updates
- Implement proper event delegation and cleanup
- Use throttling for scroll events (see `throttle` function in script.js)
- Cache DOM elements using the `domCache` pattern
- Handle errors gracefully with try-catch blocks

### Internationalization
- All user-facing text must use `data-i18n` attributes
- Translation keys follow nested object structure (e.g., `profile.name`)
- Support both Korean (primary) and English
- Update language toggle state and navigation visibility based on current language
- Handle HTML content in translations safely

### Accessibility Requirements
- All interactive elements must be keyboard accessible
- Use proper ARIA labels and descriptions
- Implement skip links for main navigation
- Ensure focus management for modal-like interactions
- Use semantic HTML and proper heading structure
- Test with screen readers and keyboard navigation
- Maintain proper color contrast ratios

### File Organization
```
/
├── index.html          # Main HTML file
├── script.js           # Main JavaScript logic
├── i18n.js            # Internationalization setup
├── README.md          # Project documentation
├── locales/           # Translation files
│   ├── ko.json       # Korean translations
│   └── en.json       # English translations
├── assets/            # Static assets (images, etc.)
└── .gitignore        # Git ignore rules
```

### Naming Conventions
- Use kebab-case for file names and IDs
- Use camelCase for JavaScript variables and functions
- Use PascalCase for class names
- Use semantic class names that describe purpose, not appearance
- Translation keys use dot notation for nested structure

### Performance Considerations
- Optimize images with proper formats (WebP preferred, PNG fallback)
- Use `loading="lazy"` for below-the-fold images
- Minimize external dependencies
- Implement efficient DOM caching and updates
- Use CSS transitions instead of JavaScript animations where possible

### Browser Compatibility
- Target modern browsers (ES6+ support required)
- Use progressive enhancement for advanced features
- Test on both desktop and mobile devices
- Ensure proper fallbacks for unsupported features

### Security Best Practices
- Use `rel="noopener noreferrer"` for external links
- Validate and sanitize user inputs
- Use HTTPS for all resources
- Implement proper CSP headers if needed

### Git Workflow
- Use conventional commit messages
- Create feature branches for significant changes
- Ensure all changes are tested before deployment
- Keep commit history clean and descriptive

### Testing Strategy
- Manual testing on multiple devices and browsers
- Accessibility testing with screen readers
- Keyboard navigation testing
- Link validation for external resources
- Visual regression testing for UI changes

### Content Guidelines
- Keep content concise and focused
- Use proper Korean typography and spacing
- Ensure all external links are relevant and working
- Maintain consistent tone and voice throughout
- Update portfolio content regularly

### Dark Mode Implementation
- Use CSS classes for theme switching (`dark` class on `<html>`)
- Respect system preference with `prefers-color-scheme`
- Store theme preference if needed (though currently uses system preference)
- Ensure proper contrast in both themes
- Update ARIA labels for theme toggle button

### Console and Debugging
- Use the `funConsoleLogs()` function for developer-friendly console output
- Remove or comment out debug logs in production
- Use meaningful error messages and logging
- Implement proper error boundaries in JavaScript

## Common Tasks

### Adding New Content
1. Add HTML structure in appropriate section
2. Add `data-i18n` attributes for translatable content
3. Update translation files in `locales/`
4. Test both language versions
5. Validate HTML and accessibility

### Updating Styles
1. Prefer Tailwind utility classes
2. Add custom CSS only when necessary
3. Test in both light and dark themes
4. Ensure responsive design works properly

### JavaScript Modifications
1. Follow existing patterns and conventions
2. Use proper error handling
3. Test keyboard accessibility
4. Ensure performance optimizations are maintained

## Deployment Notes

- Site is automatically deployed to GitHub Pages on push to main branch
- Ensure all paths are relative (no absolute paths to local files)
- Test deployed version after changes
- Monitor for any broken links or resources

## Contact and Support

For questions about this codebase or development guidelines, contact the repository owner or refer to the project documentation.