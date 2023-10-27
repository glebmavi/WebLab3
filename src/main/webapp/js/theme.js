function setTheme(theme) {
    const html = document.querySelector('html');
    const toggleThemeButton = document.querySelector('#toggleTheme');
    const toggleLocaleButton = document.querySelector('#toggleLocale');

    if (theme === "theme-dark") {
        html.dataset.theme = "theme-dark";
        toggleThemeButton.innerHTML = `<img src="assets/sun-svgrepo-com.svg" alt="SVG Image">`;
        if (toggleLocaleButton) toggleLocaleButton.innerHTML = `<img src="assets/language-dark.svg" alt="SVG Image">`;
    } else {
        html.dataset.theme = "theme-light";
        toggleThemeButton.innerHTML = `<img src="assets/moon-svgrepo-com.svg" alt="SVG Image">`;
        if (toggleLocaleButton) toggleLocaleButton.innerHTML = `<img src="assets/language-light.svg" alt="SVG Image">`;
    }
    localStorage.setItem('theme', html.dataset.theme);
}

function themeListener() {
    const toggleButton = document.querySelector('#toggleTheme');
    toggleButton.addEventListener('click', () => {
        if (localStorage.getItem('theme') === "theme-light") {
            setTheme("theme-dark");
        } else {
            setTheme("theme-light");
        }
    });
}

function getOSDefaultTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("theme-dark");
    } else {
        setTheme("theme-light");
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    themeListener();
    if (theme) {
        setTheme(theme);
    } else {
        getOSDefaultTheme();
    }
}

export {loadTheme};