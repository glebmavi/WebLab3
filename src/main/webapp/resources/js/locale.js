function localeManager() {
    const localeButton = document.getElementById("toggleLocale");
    const localeSelect = document.getElementById("localeSelect");
    localeButton.addEventListener("click", () => {
        if (localeSelect.style.display === "block") {
            localeSelect.style.display = "none";
        } else {
            localeSelect.style.display = "block";
        }
    });
}

export {localeManager};