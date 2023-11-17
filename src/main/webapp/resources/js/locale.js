function localeManager() {
    const localeButton = document.getElementById("toggleLocale");
    const localeForm = document.getElementById("localeForm");
    localeButton.addEventListener("click", () => {
        if (localeForm.style.display === "block") {
            localeForm.style.display = "none";
        } else {
            localeForm.style.display = "block";
        }
    });
}

export {localeManager};