/**
 * Sets the language of the page.
 * @param {string} lang - The language to set ('en' or 'es').
 */
const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            element.innerHTML = translations[key][lang];
        }
    });
};
