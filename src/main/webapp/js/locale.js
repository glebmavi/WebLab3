function localeManager(locale) {
    if (document.querySelector('html').lang !== locale) {
        setLocale(locale);
    }
    const localeButton = document.getElementById("toggleLocale");
    const localeSelect = document.getElementById("localeSelect");
    localeButton.addEventListener("click", () => {
        if (localeSelect.style.display === "block") {
            localeSelect.style.display = "none";
        } else {
            localeSelect.style.display = "block";
        }
    });
    const options = localeSelect.children;
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", () => {
            if (options[i].id !== locale) {
                setLocale(options[i].id);
            }
        });
    }
}

function setLocale(locale) {
    document.querySelector('html').lang = locale;
    localStorage.setItem('locale', locale);
    document.location.href = "?sessionLocale=" + locale;
}

export {localeManager};